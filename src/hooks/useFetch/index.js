import { useState, useEffect } from 'react';
import axios from '../../services';

const useAxios = () => {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState('');
	const [loading, setloading] = useState(false);
	const resetError = () => setError('');
	const fetchData = ({ url, method, data = null }) => {
		setloading(true);
		axios({
			method: method,
			url: url,
			data: data
		}).then(({data}) => setResponse(data))
			.catch((err) => setError(err))
			.finally(() =>  setloading(false));
	};

	useEffect(() => {

		return () => {

		};
	}, [response, error, loading]);

	return { response, error, loading,fetchData, resetError };
};

export {useAxios};