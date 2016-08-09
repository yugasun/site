import React, { Component } from 'react'
import { Route } from 'react-router'
/* Root pass through components */
import LayoutContainer from './index.js'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
/* layouts */
import Page from './layouts/Page'
import PageError from './layouts/PageError'
import PageLoading from './layouts/PageLoading'
import Homepage from './layouts/Homepage'
import Community from './layouts/Community'
import Post from './layouts/Post'
import Resource from './layouts/Resource'

class PageContainer extends Component {
  render () {
    const { props } = this
    return (
      <PhenomicPageContainer
        {...props}
        layouts={{
          Page,
          PageError,
          PageLoading,
          Homepage,
          Community,
          Post,
        }}
      />
    )
  }
}

export default (
  <Route component={LayoutContainer}>
    <Route path='/resource/:id' component={Resource} />
    <Route path='*' component={PageContainer} />
  </Route>
)
