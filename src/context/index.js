import React, {  useState,createContext,useContext, useCallback  } from 'react';
import axios from '../services';
import {useAxios} from '../hooks/useFetch';
import { useEffect } from 'react';
import {useLocalStorage} from '../hooks/useStorage';

export const Context = createContext({});

export const ContextProvider = (props) => {
	const [localStorage, setLocalStorage] = useLocalStorage('user', {});
	const [edit, setEdit] = useState({});
	const {loading} = useAxios();
	const handlerEditContext = useCallback((Data) => setEdit(Data), [],);

	useEffect(() => {	
		if (localStorage?.id) {
			axios.defaults.headers.common['Authorization'] = localStorage?.token;
		} else {
			axios.defaults.headers.common['Authorization'] = null;     
		}},[localStorage]);

	return (
		<Context.Provider value={{ 
			setLocalStorage,
			localStorage,
			handlerEditContext,
			edit,
			loading
		}}>
			{props.children}
		</Context.Provider>
	);
};

export const useGlobalContext = () => useContext(Context);
