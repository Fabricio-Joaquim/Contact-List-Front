/* eslint-disable no-undef */
import axios from 'axios';

const service = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: { 
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*', 
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
		'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
	}
});

export default service;