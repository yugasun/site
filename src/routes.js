import React from 'react'
import { Route } from 'react-router'
import DynamicLayout from './phenomic'
import App from './app' /* Main entry of all requests */
import Resource from './layouts/Resource' // layout for dynamic route
import SubmitResource from './pages/Community/Submit'

export default (
  <Route component={App}>
    <Route path='/resource/:id' component={Resource} />
    <Route path='access_token=:token' component={App} />
    <Route path='/community/submit' component={SubmitResource} />
    <Route path='/protected' component={App} />
    <Route path='*' component={DynamicLayout} />
  </Route>
)
