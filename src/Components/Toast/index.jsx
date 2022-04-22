import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App({ message }) {
	const Notify = () => toast(message, {
		position: toast.POSITION.TOP_LEFT,
		closeButton: true, type: toast.TYPE.SUCCESS
	});

	return (
		<>
			<Notify />
			<ToastContainer />
		</>
	);
}