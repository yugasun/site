import React from 'react'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
/* layouts */
import Page from './Page'
import PageError from './PageError'
import PageLoading from './PageLoading'
import Homepage from './Homepage'
import Community from './Community'
import Jobs from './Jobs'
import Post from './Post'
/* end layouts */

export default class Layouts extends React.Component {
  render () {
    return (
      <PhenomicPageContainer
        {...this.props}
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
