import React, {useEffect,useState, useCallback, useMemo} from 'react';
import * as Styled from './style';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import useHook from '../../hooks';
import { useGlobalContext } from '../../context';
import Loading from '../../Components/Loading';
import {useAxios}  from '../../hooks/useFetch';
import Toast from '../../Components/Toast';
import { useLocation } from 'react-router-dom';
import { schemaUserRegister } from '../../utils/schema';
import { yupTranslation } from '../../utils';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schemaUserRegister)
	});
	yup.setLocale(yupTranslation);

	const navigator = useHook();
	const { setLocalStorage, localStorage} = useGlobalContext();
	const path = useLocation().pathname;
	const { response, error, loading,fetchData, resetError } = useAxios();
	useEffect(() => {
		if (response?.id) {
			setLocalStorage(response);
			navigator.navigateTo('/home');
		}
		if(error){
			Toast({message:error?.data?.message,type:'ERROR'});
			resetError();
		}
	}, [error,response]);
	useEffect(() => {
		if(localStorage?.id){
			navigator.navigateTo('/home');
		}
	}, [localStorage]);

	const onSubmit = (data) => {
		if (path=== '/') {
			fetchData({
				url: '/login',
				method: 'POST',
				data: data
			});
		}else{
			fetchData({
				url: 'users',
				method: 'POST',
				data: data
			});
		}
	};
	const buttonTitle = useMemo(() =>  path === '/' ? 'Entrar' : 'Cadastrar', [path]);
	const [seePassword, setSeePassword] = useState(true);
	const togglePassword = () => useCallback(setSeePassword(!seePassword)[seePassword],);
	
	const IconSeePassword = () => {
		return seePassword ?
			<AiOutlineEye onClick={togglePassword} size={20} /> :
			<AiOutlineEyeInvisible size={20} onClick={togglePassword} />;
	};
	const handlerPassword = seePassword ? 'password' : 'text';
	const seeRegister = useMemo(()=>path === '/' ? (
		<Styled.LinkWarpper to="register">
			<p>Cadastrar-se</p>
		</Styled.LinkWarpper>	)
		:
		<Styled.LinkWarpper to="/">
			Voltar para Login
		</Styled.LinkWarpper>
	, [buttonTitle,path]);
	return (
		<>
			<Styled.MainWarpper>
				{loading?
					<Loading/>:	
					<Styled.FormWarpper onSubmit={handleSubmit(onSubmit)}>
						<h2>{buttonTitle}</h2>
						<label htmlFor='email'>E-mail</label>
						<input  {...register('email', { required: 'campo obrigatorio' })}
							id='email' type='text' placeholder='email' />
						{errors.email && <span>{errors.email.message}</span>}
						<label htmlFor='password'>Senha</label>
						<Styled.Password>
							<input
								{...register('password', { required: 'campo obrigatorio' })}
								type={handlerPassword} placeholder='Senha' />
							<IconSeePassword />
						</Styled.Password>
						{errors.password && <span>{errors.password.message}</span>}
						<button>{buttonTitle}</button>
						{seeRegister}
					</Styled.FormWarpper>
				}
			</Styled.MainWarpper>
		</>
	);
};

export default Login;