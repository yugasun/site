import React from 'react'
import { PageContainer } from 'phenomic'
import * as layouts from './layouts/index' // Page Layouts
import * as templates from './pages' // Page Layouts

export default class DynamicLayout extends React.Component {
  render () {
    return (
      <PageContainer
        {...this.props}
        defaultLayout={'Default'}
        layouts={{...layouts, ...templates}}
      />
    )
  }
}
