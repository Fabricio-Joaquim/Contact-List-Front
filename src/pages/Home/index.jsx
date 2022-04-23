/*eslint-disable*/
import React, { useState, useEffect, useCallback } from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import * as Styled from './style';
import Loading from '../../Components/Loading';
import CardContact from '../../Components/CardContact';
import useHook from '../../hooks/';
import NavBar from '../../Components/HomeBar';
import axios from '../../services';
import { useGlobalContext } from '../../context';
import { useAxios } from '../../hooks/useFetch';
const index = () => {
	const [contacts, setContacts] = useState([]);
	const {handlerEditContext}  = useGlobalContext();
	useEffect(() => {
		axios.get('/contact').then(res => {
			setContacts(res.data);
		});
	}, []);
	const navigator = useHook();
	const handlerPage = () => navigator.navigateTo('/addContact');
	const {fetchData} = useAxios();
	const handlerEdit = (Data) => {
		handlerEditContext(Data);
		navigator.navigateTo(`/edit/${Data?.id}`);
	};
	const handlerDelete = useCallback(
		(MyId) => {
			fetchData({
				url: `/contact/${MyId}`,
				method: 'DELETE',
				data: {},
			});	
			console.log(MyId);
			/* 		setContacts(contacts.filter(contact => contact.id !== id));	 */	
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
					{!contacts.length ? (<Loading />) : (
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