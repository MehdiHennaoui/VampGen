import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	browserHistory
} from 'react-router';
import { render } from 'react-dom';

import App from './app';
import Step1 from './character-creation/step1';
import Step2 from './character-creation/step2';

Meteor.startup(() => {
	render(
		<Router history={browserHistory}>
			
			<Route path="/" component={App} />
			<Route path="/step1" component={Step1} />
			<Route path="/step2" component={Step2} />
		
		</Router>,
		document.getElementById('render-target')
		);

});

