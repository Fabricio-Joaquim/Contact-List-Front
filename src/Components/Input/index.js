import React from 'react';
import * as Style from './style';
import MaskedInput from 'react-input-mask';
import { minDate, maxDate } from '../../utils';
const Input = ({ nameRegister, label, register, errors, ...rest }) => {
	const Error = ({ option }) => {
		if (errors[option]) {
			return <Style.Message>{errors[option].message}</Style.Message>;
		}
	};
	const myMaxDate = maxDate();
	const myMinDate = minDate();
	const { type } = rest;
	return (
		<Style.MainWarpper>
			<label htmlFor={nameRegister}>{label}</label>
			{type !== 'tel' ?
				(<input type={type || 'text'}
					max={type === 'date' ? myMaxDate : ''}
					min={type === 'date' ? myMinDate : ''}
					{...register(nameRegister, { required: 'obrigatorio' })} placeholder={`Escreva seu ${label.toLowerCase()}`} />) :
				(<MaskedInput mask="(99)9 9999-9999"
					placeholder='(99)9 9999-9999'
					{...register(nameRegister, { required: 'obrigatorio' })}
				/>)
			}
			<Error option={nameRegister} />
		</Style.MainWarpper>
	);
};

export default Input;