import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { PRIMAYR } from './router/index'


export default function () {
	return (
		<Router>
			<Switch>
			{
				PRIMAYR.map(item => {
					return (
						<Route path={ item.path } exact component={ item.component }></Route>
					)
				})
			}
			</Switch>

			
		</Router >
	)
}