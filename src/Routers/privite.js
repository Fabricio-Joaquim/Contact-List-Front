import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useGlobalContext } from '../context';

const PrivateRoute = () => {
	const {localStorage} = useGlobalContext();
	const auth = localStorage?.id; // determine if authorized, from context or however you're doing it
	return auth ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;


export function newPriviteRouter({ children }) {
	const auth = localStorage?.id;
	return auth ? children : <Navigate to="/" />;
}