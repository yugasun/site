import React from 'react'
import { Route } from 'react-router'
import Index from './Index' /* Main entry of all requests */
import Layouts from './layouts' // Page Layouts
import Resource from './layouts/Resource' // layout for dynamic route

export default (
  <Route component={Index}>
    <Route path='/resource/:id' component={Resource} />
    <Route path='*' component={Layouts} />
  </Route>
)
