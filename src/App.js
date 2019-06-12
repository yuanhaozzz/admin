import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

import { PRIMAYR } from './router/index'
import Guard from './router/Guard'
import ErrorPage from './pages/404/404'

import './App.css'
export default function (props) {
	let { match } = props
	return (
		<Router>
			<Switch>
				{
					PRIMAYR.map(route => {
						return (
							<Route key={route.path} exact={route.exact ? true : false} path={route.path} render={(props) => {
								return <Guard {...props} route={route.children}></Guard>
							}}></Route>
							
							// <Route key={route.path} path={route.path} render={(props) => {
							// 	return <route.component exact={ route.exact } {...props} route={route.children} />
							// }}></Route>
						)
					})
				}
				<Route component={ErrorPage}></Route>
			</Switch>
		</Router >
	)
}