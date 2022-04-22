import React from 'react';
import * as Styled from './style';

const CardContact = ({ contact }) => {
	return (
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
	);
};

export default CardContact;