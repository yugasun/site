import React from 'react'
import { Route } from 'react-router'
import App from './app' /* Main entry of all requests */
import Layouts from './layouts' // Page Layouts
import Login from './components/Login/Login'
import Resource from './layouts/Resource' // layout for dynamic route
import AuthService from './utils/AuthService'
const isClient = typeof window !== 'undefined'

const auth = new AuthService(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__) // eslint-disable-line
let requireAuth = null
// onEnter callback to validate authentication in private routes
if (isClient) {
  requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
      replace({ pathname: '/login' })
    }
  }
}

export default (
  <Route component={App} auth={auth}>
    <Route path='/resource/:id' component={Resource} />
    <Route path='login' component={Login} auth={auth} />
    <Route path='access_token=:token' component={Login} />
    <Route path='/protected' component={Login} onEnter={requireAuth} auth={auth} />
    <Route path='*' component={Layouts} />
  </Route>
)
