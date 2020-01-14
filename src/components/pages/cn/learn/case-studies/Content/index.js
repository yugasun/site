import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import SingleCaseStudyPreview from './SingleCaseStudyPreview'
import SearchOptions from '../Search/index'

export default class CaseStudiesContent extends React.Component {
  constructor(props) {
    super(props)
    const { casestudies } = this.props;
    this.state = {
      caseStudiesRaw: casestudies,
      caseStudies: casestudies,
    }
  }

  handleRefreshResults = filterObj => {
    let filteredCaseStudies = this.state.caseStudiesRaw

    if (filterObj.search) {
      filteredCaseStudies = filteredCaseStudies.filter(({id, frontmatter: x}) => {
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
    console.log('caseStudies', this.state.caseStudies);
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
