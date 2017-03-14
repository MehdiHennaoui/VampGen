import React from 'react';
import {
	Router,
	Route,
	IndexRoute,
	browserHistory
} from 'react-router';
import { render } from 'react-dom';

import App from './app';
import Description from './character-creation/description';
import Clan from './character-creation/clan';
import Attributes from './character-creation/attributes';

Meteor.startup(() => {
	render(
		
		<Router history={browserHistory}>
			
			<Route path="/" component={App} />
			<Route path="/description" component={Description} />
			<Route path="/clan" component={Clan} />
			<Route path="/attributes" component={Attributes} />

		
		</Router>,
		document.getElementById('render-target')
		);

});

