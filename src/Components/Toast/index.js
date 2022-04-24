import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function App({ message,type }) {
	const Notify = () => toast(message, {
		position: toast.POSITION.TOP_LEFT,
		type: toast.TYPE[type],
	});

	return (Notify());
}