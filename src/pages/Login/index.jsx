import React, {useEffect,useState} from 'react';
import * as Styled from './style';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import useHook from '../../hooks';
import { useGlobalContext } from '../../context';
import Loading from '../../Components/Loading';
import {useAxios}  from '../../hooks/useFetch';
import Toast from '../../Components/Toast';
const Login = () => {
	const { register, handleSubmit,  formState: { errors } } = useForm({});
	const navigator = useHook();
	const { handlerUser} = useGlobalContext();


	const { response, error, loading,fetchData, resetError } = useAxios();
	console.log(error,'res');
	useEffect(() => {
		if (response?.token) {
			handlerUser(response);
			navigator.navigateTo('/home');
		}
		if(error){
			Toast({message:error.message,type:'ERROR'});
			resetError();
		}
	}, [error,response]);
		
	const onSubmit = (data) => {
		fetchData({
			url: 'login',
			method: 'POST',
			data: data
		});
	};


	const [seePassword, setSeePassword] = useState(true);
	const togglePassword = () => setSeePassword(!seePassword);
	const IconSeePassword = () => {
		return seePassword ?
			<AiOutlineEye onClick={togglePassword} size={20} /> :
			<AiOutlineEyeInvisible size={20} onClick={togglePassword} />;
	};
	const handlerPassword = seePassword ? 'password' : 'text';
	return (
		<>
			<Styled.MainWarpper>
				{loading?
					<Loading/>:	
					<Styled.FormWarpper onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='email'>Login</label>
						<input  {...register('email', { required: 'campo obrigatorio' })}
							id='email' type='text' placeholder='email' />
						{errors.email && <span>{errors.email.message}</span>}
						<label htmlFor='password'>Password</label>
						<Styled.Password>
							<input
								{...register('password', { required: 'campo obrigatorio' })}
								type={handlerPassword} placeholder='password' />
							<IconSeePassword />
						</Styled.Password>
						{errors.password && <span>{errors.password.message}</span>}
						<button>Login</button>
						<p>Cadastrar-se</p>
					</Styled.FormWarpper>
				}
			</Styled.MainWarpper>

		</>
	);
};

export default Login;