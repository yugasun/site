import React, { Component } from 'react'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
import { Route } from 'react-router'
import IndexComponent from './IndexComponent' /* Root pass through components */
/* layouts */
import Page from './layouts/Page'
import PageError from './layouts/PageError'
import PageLoading from './layouts/PageLoading'
import Homepage from './layouts/Homepage'
import Community from './layouts/Community'
import Jobs from './layouts/Jobs'
import Post from './layouts/Post'
import Resource from './layouts/Resource'
/* end layouts */

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
          Jobs,
        }}
      />
    )
  }
}

export default (
  <Route component={IndexComponent}>
    <Route path='/resource/:id' component={Resource} />
    <Route path='*' component={PageContainer} />
  </Route>
)
