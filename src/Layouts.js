import React from 'react'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
/* custom layouts */
import Page from './layouts/Page'
import PageError from './layouts/PageError'
import PageLoading from './layouts/PageLoading'
import Homepage from './layouts/Homepage'
import Community from './layouts/Community'
import Jobs from './layouts/Jobs'
import Post from './layouts/Post'

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
