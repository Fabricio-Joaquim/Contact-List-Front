import React from 'react';
import * as Styled from './style';
import NavBar from '../../Components/HomeBar';
import { useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import { yupTranslation, schema } from '../../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Contact = () => {
	yup.setLocale(yupTranslation);
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	const onSubmit = data => console.log(data, 888);
	return (
		<Styled.MainWarpper>
			<NavBar>Cadastrar Contato</NavBar>
			<Styled.FormWarpper onSubmit={handleSubmit(onSubmit)}>
				<Styled.InputWarpper>
					<Input register={register} errors={errors} nameRegister="nome" label="Nome" />
					<Input register={register} errors={errors} nameRegister="sobrenome" label="Sobrenome" />
					<Input register={register} errors={errors} type="tel" nameRegister="telefone" label="Telefone" />
					<Input
						register={register}
						errors={errors}
						type="date"
						nameRegister="dataDeNascimento"
						label="Data de Nascimento"
					/>
					<Input register={register} errors={errors} nameRegister="endereco" label="Endereço" />
					<Input register={register} errors={errors} nameRegister="email" label="E-mail" />
				</Styled.InputWarpper>
				<button type="submit">
                    Cadastrar
				</button>
			</Styled.FormWarpper>
		</Styled.MainWarpper>
	);
};

export default Contact;