<<<<<<< HEAD
import React, { useMemo, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> parent of 83d909e... parte das integrações e toasts
import * as Styled from './style';
import NavBar from '../../Components/HomeBar';
import { useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import { yupTranslation, schema } from '../../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
<<<<<<< HEAD
import { useAxios } from '../../hooks/useFetch';
import useNavigate from '../../hooks/';
import { useGlobalContext } from '../../context';
import Loading from '../../Components/Loading';
import { useLocation } from 'react-router-dom';
import Toast from '../../Components/Toast';

const Contact = () => {
	const { edit, handlerEditContext } = useGlobalContext();
	const { loading, response, error, resetError, fetchData } = useAxios();
	const { navigateTo } = useNavigate();
	yup.setLocale(yupTranslation);
	const pathRouter = useLocation().pathname;
	useEffect(() => {
		if (pathRouter === '/addContact')
			handlerEditContext({});
	}, []);

	useEffect(() => {
		if (error) {
			Toast({ message: error?.data?.message, type: 'ERROR' });
			resetError();
		}

		if (response && pathRouter === '/addContact') {
			Toast({ message: 'Contato salvo com sucesso', type: 'SUCCESS' });
			handlerEditContext({});
			navigateTo('/home');
		}
		if (response && pathRouter !== '/addContact') {
			Toast({ message: 'Contato atualizado com sucesso', type: 'SUCCESS' });
			handlerEditContext({});
			navigateTo('/home');
		}
	}, [response, error]);

	const title = useMemo(() => edit?.id ? 'Editar Contato' : 'Cadastrar Contato', [pathRouter]);
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: { ...edit, dateBorn: edit?.dateBorn?.split('T')[0] },
		resolver: yupResolver(schema)
	});

	const onSubmit = data => {
		if (pathRouter !== '/addContact') {
			fetchData({
				url: `/contact/${edit?.id}`,
				method: 'PUT',
				data: data
			});
		} else {
			fetchData({
				url: 'contact',
				method: 'POST',
				data: data
			});
		}
	};

	return (
		<Styled.MainWarpper>
			<NavBar>{title}</NavBar>
			{loading ?
				<Styled.ContainerLoading>
					<Loading />
				</Styled.ContainerLoading> :
				<Styled.FormWarpper onSubmit={handleSubmit(onSubmit)}>
					<Styled.InputWarpper>
						<Input register={register} errors={errors} nameRegister="name" label="Nome" />
						<Input register={register} errors={errors} nameRegister="lastname" label="Sobrenome" />
						<Input register={register} errors={errors} type="tel" nameRegister="phone" label="Telefone" />
						<Input
							register={register}
							errors={errors}
							type="date"
							nameRegister="dateBorn"
							label="Data de Nascimento"
						/>
						<Input register={register} errors={errors} nameRegister="address" label="Endereço" />
						<Input register={register} errors={errors} nameRegister="email" label="E-mail" />
					</Styled.InputWarpper>
					<button type="submit">{edit?.id ? 'Editar' : 'Salvar'}</button>
				</Styled.FormWarpper>}
=======

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
>>>>>>> parent of 83d909e... parte das integrações e toasts
		</Styled.MainWarpper>
	);
};

export default Contact;