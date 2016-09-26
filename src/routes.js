import React from 'react'
import { Route } from 'react-router'
import App from './app' /* Main entry of all requests */
import Layouts from './layouts' // Page Layouts
import Resource from './layouts/Resource' // layout for dynamic route
import SubmitResource from './pages/Community/Submit'
import auth from './utils/auth'

export default (
  <Route component={App} auth={auth}>
    <Route path='/resource/:id' component={Resource} />
    <Route path='access_token=:token' component={App} />
    <Route path='/community/submit' component={SubmitResource} />
    <Route path='/protected' component={App} />
    <Route path='*' component={Layouts} />
  </Route>
)
