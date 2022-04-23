import React from 'react';
import * as Pages from './pages';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Layer from './Components/Layer';

function App() {
	return (
		<Layer>
			<Router>
				<Routes>
					<Route exact path="/" element={<Pages.Login />} />
					<Route exact path="/register" element={<Pages.Login />} />
					<Route path='*' element={<Pages.NotFound />} />
					{<>
						<Route exact path="/home" element={<Pages.Home />} />
						<Route exact path="/addContact" element={<Pages.AddContact />} />
						<Route exact path="/edit/:id" element={<Pages.AddContact />} />
					</>
					}
				</Routes>
			</Router>
		</Layer>
	);
}

export default App;
