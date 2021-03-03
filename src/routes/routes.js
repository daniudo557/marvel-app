import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import paths from './paths'
import Comics from '../pages/comics'

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path={paths.home} exact component={App} />
			<Route path={paths.comics} component={Comics} />
		</BrowserRouter>
	);
} 
