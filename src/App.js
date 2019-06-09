import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import { PRIMAYR } from './router/index'

import './App.css'
export default function (props) {
	let { match } = props
	return (
		<Router>
			<Switch>
				{
					PRIMAYR.map(route => {
						return (
							<Route key={route.path} path={route.path} render={(props) => {
								console.log(props)
								if (props.match.path === '/') {
									return <Redirect to="/login"></Redirect>
								}
								return <route.component exact={ route.exact } {...props} route={route.children} />
							}}></Route>
						)
					})
				}
			</Switch>
		</Router >
	)
}