import React from 'react';
import * as Styled from './style';

const Layer = ({ children }) => {
	return (
		<Styled.Global>
			{children}
		</Styled.Global>
	);
};

export default Layer;