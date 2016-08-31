import React from 'react'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
/* custom layouts */
import Page from './layouts/Page'
import PageLoading from './layouts/PageLoading'
import Post from './layouts/Post'
/* custom pages */
import Jobs from './pages/Jobs'
import FourOFour from './pages/404'
import Homepage from './pages/Homepage'
import Community from './pages/Community'

export default class Layouts extends React.Component {
  render () {
    return (
      <PhenomicPageContainer
        {...this.props}
        className='hi'
        layouts={{
          Page,
          FourOFour,
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
