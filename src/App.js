import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Transaction from './components/Transaction';

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/transaction/:id" render={(props) => <Transaction {...props} />} />
				<Route path="/" render={(props) => <Home {...props} />} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
