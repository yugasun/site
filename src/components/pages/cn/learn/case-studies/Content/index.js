import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import SingleCaseStudyPreview from './SingleCaseStudyPreview'
import caseStudies from './data'
import SearchOptions from '../Search/index'

export default class CaseStudiesContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      caseStudiesRaw: caseStudies,
      caseStudies: caseStudies,
    }
  }

  handleRefreshResults = filterObj => {
    let filteredCaseStudies = this.state.caseStudiesRaw

    if (filterObj.search) {
      filteredCaseStudies = filteredCaseStudies.filter(x => {
        return x.title.toLowerCase().includes(filterObj.search)
      })
    }

    if (filterObj.framework) {
      filteredCaseStudies = filteredCaseStudies.filter(x => {
        return filterObj.framework.includes(x.framework)
      })
    }

    this.setState({ caseStudies: filteredCaseStudies })
  }

  render() {
    return (
      <React.Fragment>
        <SearchOptions refreshResults={this.handleRefreshResults} />
        <AppContainer>
          {this.state.caseStudies.map((caseStudy, index) => (
            <Box width={[1, 1, 0.8]} mx='auto' key={`case-study-${index}`}>
              <SingleCaseStudyPreview {...caseStudy} />
            </Box>
          ))}
        </AppContainer>
      </React.Fragment>
    )
  }
}
