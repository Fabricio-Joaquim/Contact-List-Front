import React, {  useState,createContext,useContext } from 'react';

export const Context = createContext({});

export const ContextProvider = (props) => {
/* 	const [contacts, setContacts] = useState([]);
 */	const [user, setUser] = useState({});

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
			user,
			setUser
		}}>
			{props.children}
		</Context.Provider>
	);
};

export const useGlobalContext = () => useContext(Context);
