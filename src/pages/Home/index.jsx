<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> parent of 83d909e... parte das integrações e toasts
import { RiContactsBook2Fill } from 'react-icons/ri';
import * as Styled from './style';
import Loading from '../../Components/Loading';
import CardContact from '../../Components/CardContact';
import useHook from '../../hooks/';
import NavBar from '../../Components/HomeBar';
<<<<<<< HEAD
import Toast from '../../Components/Toast';
import axios from '../../services';
import { useGlobalContext } from '../../context';
import { useAxios } from '../../hooks/useFetch';
=======

>>>>>>> parent of 83d909e... parte das integrações e toasts
const index = () => {
	const {fetchData, response, error, loading, resetError} = useAxios();
	const navigator = useHook();
	const {handlerEditContext, setLocalStorage}  = useGlobalContext();
	const handlerPage = () => navigator.navigateTo('/addContact');
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
<<<<<<< HEAD
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

=======
		setContacts([]);
		/*         getContacts().then(data => setContacts(data))
 */    }, []);
	const navigator = useHook();
	const handlerPage = () => navigator.navigateTo('/addContact');
>>>>>>> parent of 83d909e... parte das integrações e toasts
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
<<<<<<< HEAD
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
=======
					{!contacts.length ? (<Loading />) : (
						contacts.map(contact => (
							<CardContact key={contact.id} contact={contact} />
						))
					)}
>>>>>>> parent of 83d909e... parte das integrações e toasts
				</Styled.List>
			</Styled.SubContainer>
		</Styled.Container>
	);
};

export default index;