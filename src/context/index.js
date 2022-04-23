/* eslint-disable no-unused-vars */
import React, {  useState,createContext,useContext, useCallback  } from 'react';
import axios from '../services';
import {useAxios} from '../hooks/useFetch';
import { useEffect } from 'react';
export const Context = createContext({});

export const ContextProvider = (props) => {
	const [contacts, setContacts] = useState([]);
	const [user, setUser] = useState({});
	const [edit, setEdit] = useState({});
	const {loading,response,fetchData} = useAxios();
	const handlerUser = useCallback((Data) => setUser(Data), [],);
	const handlerEditContext = useCallback((Data) => setEdit(Data), [],);
	if (user) {
		axios.defaults.headers.common['Authorization'] = user.token;
	} else {
		axios.defaults.headers.common['Authorization'] = null;     
	}    

	useEffect(() => {
		if (user) {
			fetchData({
				url: '/contact',
				method: 'GET',
			});	
		}
	}, []);
	


	return (
		<Context.Provider value={{ 
			user,
			setUser,
			handlerUser,
			handlerEditContext,
			edit
		}}>
			{props.children}
		</Context.Provider>
	);
};

export const useGlobalContext = () => useContext(Context);
