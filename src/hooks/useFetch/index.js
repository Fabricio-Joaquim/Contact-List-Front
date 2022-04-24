import { useState, useEffect, useCallback } from 'react';
import axios from '../../services';
import {useGlobalContext} from '../../context';
const useAxios = () => {
	const {setLocalStorage} = useGlobalContext();
	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setloading] = useState(false);
	const resetError =useCallback(
		() => setError(''), [error],
	);
	
	const fetchData = ({ url, method, data = null }) => {
		setloading(true);
		axios({
			method: method,
			url: url,
			data: data
		}).then(({data}) => setResponse(data))
			.catch((err) => {setError(err?.response); 
				if(err?.response?.status === 401){
					setLocalStorage({});
					window.location.href = '/';
				}
			})
			.finally(() =>  setloading(false));
	};

	useEffect(() => {

		return () => {

		};
	}, [response, error, loading]);

	return { response, error, loading,fetchData, resetError };
};

export {useAxios};