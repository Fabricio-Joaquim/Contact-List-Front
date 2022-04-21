import React from 'react'
import * as Styled from "./style";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import useHook from "../../hooks"
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigator = useHook();
    const onSubmit = data => { navigator.navigateTo("/home") }
    const [seePassword, setSeePassword] = React.useState(false);
    const togglePassword = () => setSeePassword(!seePassword);
    const IconSeePassword = () => {
        return seePassword ?
            <AiOutlineEye onClick={togglePassword} size={20} /> :
            <AiOutlineEyeInvisible size={20} onClick={togglePassword} />
    }
    const handlerPassword = seePassword ? "password" : "text"
    return (
        <Styled.MainWarpper onSubmit={handleSubmit(onSubmit)}        >
            <label htmlFor='username'>Login</label>
            <input  {...register("username", { required: true })}
                id='username' type="text" placeholder="username" />
            {errors.username && <span>This field is required</span>}
            <label htmlFor='password'>Password</label>
            <Styled.Password>
                <input
                    {...register("password", { required: true })}
                    type={handlerPassword} placeholder="password" />
                <IconSeePassword />
            </Styled.Password>
            {errors.password && <span>This field is required</span>}
            <button>Login</button>
        </Styled.MainWarpper>
    )
}

export default Login