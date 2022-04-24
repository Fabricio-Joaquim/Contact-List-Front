import React, { useState, useEffect, useCallback } from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import * as Styled from './style';
import Loading from '../../Components/Loading';
import CardContact from '../../Components/CardContact';
import useHook from '../../hooks/';
import NavBar from '../../Components/HomeBar';
import Toast from '../../Components/Toast';
import axios from '../../services';
import { useGlobalContext } from '../../context';
import { useAxios } from '../../hooks/useFetch';
const index = () => {
	const {fetchData, response, error, loading, resetError} = useAxios();
	const navigator = useHook();
	const {handlerEditContext, setLocalStorage}  = useGlobalContext();
	const handlerPage = () => navigator.navigateTo('/addContact');
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		axios.get('/contact').then(res => {
			setContacts(res.data);
		}).catch((error) => {
			if(error?.response.data?.status === 401){
				setLocalStorage({});
				window.location.href = '/';
			}
		});
	}, []);
	useEffect(() => {
		if (error) {
			Toast({ message: error?.data?.message, type: 'ERROR' });
			resetError();
		}

		if (response) {
			Toast({ message: 'Contato removido com sucesso', type: 'SUCCESS' });
		}
	}, [error,response]);

	const handlerEdit = (Data) => {
		handlerEditContext(Data);
		navigator.navigateTo(`/edit/${Data?.id}`);
	};

	const handlerDelete = useCallback(
		(MyId) => {
			fetchData({
				url: `/contact/${MyId}`,
				method: 'DELETE',
				data: {
					id: MyId
				}
			});	
		}, [],
	);

	return (
		<Styled.Container>
			<NavBar>Lista de Contatos</NavBar>
			<Styled.SubContainer>
				<Styled.SideHome>
					<div onClick={handlerPage}>
						<RiContactsBook2Fill size={50} /> Adicionar Contato
					</div>
				</Styled.SideHome>
				<Styled.List>
					{ loading ? (<Loading />):
						!contacts.length ? (<Styled.Empty>Nenhum contato encontrado</Styled.Empty>)
						
							: (
								contacts.map(contact => (
									<CardContact 
										handlerEdit={handlerEdit}
										key={contact.id}
										contact={contact}
										handlerDelete={handlerDelete}
									/>
								))
							)}
				</Styled.List>
			</Styled.SubContainer>
		</Styled.Container>
	);
};

export default index;