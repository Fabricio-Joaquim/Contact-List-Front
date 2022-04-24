import React from 'react';
import * as Styled from './style';

const CardContact = ({ contact }) => {
	return (
<<<<<<< HEAD
		<>
			<Styled.Container>
				<div>
					<span>Nome</span>
					{contact?.name}
				</div>
				<div>
					<span>Sobrenome</span>
					{contact?.lastname}
				</div>
				<div>
					<span>Telefone</span>
					{contact?.phone}
				</div>
				<div>
					<MdOutlineEdit size={30} color='rgb(24, 196, 144)' onClick={()=>handlerEdit(contact)} />
					<MdDeleteForever size={30} color="#f00" onClick={()=>handlerDelete(contact?.id)}/>
				</div>
			</Styled.Container>
		</>
=======
		<Styled.Container>
			<div>
				<span>Nome</span>
				{contact.nome}
			</div>
			<div>
				<span>Sobrenome</span>
				{contact.sobrenome}
			</div>
			<div>
				<span>Telefone</span>
				{contact.Telefone}
			</div>
		</Styled.Container>
>>>>>>> parent of 83d909e... parte das integrações e toasts
	);
};

export default CardContact;