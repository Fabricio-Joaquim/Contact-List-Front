import React, { useState, useEffect } from 'react';
import { RiContactsBook2Fill } from 'react-icons/ri';
import * as Styled from './style';
import Loading from '../../Components/Loading';
import CardContact from '../../Components/CardContact';
import useHook from '../../hooks/';
import NavBar from '../../Components/HomeBar';

const index = () => {
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		setContacts([]);
		/*         getContacts().then(data => setContacts(data))
 */    }, []);
	const navigator = useHook();
	const handlerPage = () => navigator.navigateTo('/addContact');
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
							<CardContact key={contact.id} contact={contact} />
						))
					)}
				</Styled.List>
			</Styled.SubContainer>
		</Styled.Container>
	);
};

export default index;