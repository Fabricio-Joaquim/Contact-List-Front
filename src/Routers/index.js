import React from 'react';
import * as Pages from '../pages';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Layer from '../Components/Layer';
import PrivateRoute from './privite';
function App() {
	return (
		<Layer>
			<Router>
				<Routes>
					<Route path='*' element={<Pages.NotFound />} />
					<Route  path="/register" element={<Pages.Login />} />
					<Route  path="/"	 element={<Pages.Login />} />
					<Route  path='/home' element={<PrivateRoute/>}>
						<Route  path="" element={<Pages.Home />} />
					</Route>
					<Route  path='/addContact' element={<PrivateRoute/>}>
						<Route  path="/addContact" element={<Pages.AddContact />} />
					</Route>
					<Route  path='/edit/:id' element={<PrivateRoute/>}>
						<Route  path="/edit/:id" element={<Pages.AddContact />} />
					</Route>

				</Routes>
			</Router>
		</Layer>
	);
}

export default App;
