import React from 'react'
import FrameworkOptions from './FrameworkOptions'
import ExamplesAndTutorials from './ExamplesAndTutorials'
import SearchDocs from './SearchDocs'

const OverviewExtraContent = () => (
  <React.Fragment>
    <SearchDocs />
    <FrameworkOptions />
    <ExamplesAndTutorials />
  </React.Fragment>
)

export default OverviewExtraContent
