import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import Global from './style/global';
import theme from './style/theme';
import { ContextProvider } from './context';
import {ToastContainer} from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ContextProvider >
				<Reset />
				<Global />
				<ToastContainer />
				<Router />
			</ContextProvider>
		</ThemeProvider>
	</React.StrictMode>
);
