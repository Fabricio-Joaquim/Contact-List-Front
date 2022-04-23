import React, {memo} from 'react';
import * as Styled from './style';
import {MdOutlineEdit, MdDeleteForever} from 'react-icons/md';
const CardContact = ({ contact,handlerEdit,handlerDelete }) => {
	return (
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
	);
};

export default memo(CardContact);