import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {ImSad2} from 'react-icons/im';
import * as Styled from './style';

const NotFound = () => {
	return (
		<Styled.Warrpper>
			<ImSad2 size={200} color="#f10"/>
			<h1>Página não encontrada</h1>
			<Styled.MyLink to="/" >
				<AiFillHome size={35}/> Página Inicial
			</Styled.MyLink>
		</Styled.Warrpper>
	);
};

export default NotFound;