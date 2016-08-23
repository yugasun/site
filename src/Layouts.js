import React from 'react'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
/* layouts */
import Page from './layouts/Page'
import PageError from './layouts/PageError'
import PageLoading from './layouts/PageLoading'
import Homepage from './layouts/Homepage'
import Community from './layouts/Community'
import Jobs from './layouts/Jobs'
import Post from './layouts/Post'
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
