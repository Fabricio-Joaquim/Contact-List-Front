import axios from 'axios';

const service = axios.create({
	baseURL: 'https://contact-back-end.herokuapp.com/',
	headers: { 
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*', 
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
		'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
	}
});


export default service;