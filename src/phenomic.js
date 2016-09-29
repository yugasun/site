import React from 'react'
import PhenomicPageContainer from 'phenomic/lib/PageContainer'
import * as layouts from './layouts/index' // Page Layouts
import * as templates from './pages' // Page Layouts

export default class DynamicLayout extends React.Component {
  render () {
    return (
      <PhenomicPageContainer
        {...this.props}
        layouts={{...layouts, ...templates}}
      />
    )
  }
}
