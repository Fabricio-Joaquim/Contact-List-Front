<<<<<<< HEAD
import React, {  useState,createContext,useContext, useCallback  } from 'react';
import axios from '../services';
import {useAxios} from '../hooks/useFetch';
import { useEffect } from 'react';
import {useLocalStorage} from '../hooks/useStorage';
=======
import React, {  useState,createContext,useContext } from 'react';
>>>>>>> parent of 83d909e... parte das integrações e toasts

export const Context = createContext({});

export const ContextProvider = (props) => {
<<<<<<< HEAD
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
=======
/* 	const [contacts, setContacts] = useState([]);
 */	const [user, setUser] = useState({});
>>>>>>> parent of 83d909e... parte das integrações e toasts

	/*     if (user) {
      axios.defaults.headers.common['Authorization'] = user.token;
  } else {
      axios.defaults.headers.common['Authorization'] = null;
      /*if setting null does not remove `Authorization` header then try     
        delete axios.defaults.headers.common['Authorization'];
      
  }     */
	console.log(user);
	return (
		<Context.Provider value={{ 
<<<<<<< HEAD
			setLocalStorage,
			localStorage,
			handlerEditContext,
			edit,
			loading
=======
			user,
			setUser
>>>>>>> parent of 83d909e... parte das integrações e toasts
		}}>
			{props.children}
		</Context.Provider>
	);
};

export const useGlobalContext = () => useContext(Context);
