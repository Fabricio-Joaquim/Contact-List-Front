/*eslint-disable*/
import React, { useMemo, useEffect} from 'react';
import * as Styled from './style';
import NavBar from '../../Components/HomeBar';
import { useForm } from 'react-hook-form';
import Input from '../../Components/Input';
import { yupTranslation, schema } from '../../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useAxios}  from '../../hooks/useFetch';
import { useGlobalContext } from '../../context';
import Loading from '../../Components/Loading';
import { useLocation } from 'react-router-dom';

const Contact = () => {
	const {edit, handlerEditContext } = useGlobalContext();
	yup.setLocale(yupTranslation);
	const pathRouter =  useLocation().pathname;
	useEffect(() => {
		if(pathRouter!=='/addContact')
			handlerEditContext({});	

	}, []);
	
	const { register, handleSubmit, formState: { errors } } = useForm({
		defaultValues: {...edit, dateBorn: edit?.dateBorn?.split('T')[0]},
		resolver: yupResolver(schema)
	});
	const { loading, fetchData } = useAxios();
		
	const onSubmit = data => {
		if (edit?.id) {
			fetchData({
				url: `/contact/${edit?.id}`,
				method: 'PUT',
				data: data
			});

		}else{
			fetchData({
				url: 'contact',
				method: 'POST',
				data: data
			});
		}
	};
	const title = useMemo(() => edit?.id?'Editar Contato':'Cadastrar Contato', [pathRouter]);
	return (
		<Styled.MainWarpper>
			<NavBar>{title}</NavBar>
			{loading?
				<Styled.ContainerLoading>
					<Loading/>
				</Styled.ContainerLoading>:
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
					<button type="submit">
                    Cadastrar
					</button>
				</Styled.FormWarpper>}
		</Styled.MainWarpper>
	);
};

export default Contact;