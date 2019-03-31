import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import SingleCaseStudyPreview from './SingleCaseStudyPreview'
import caseStudies from './data'
import SearchOptions from '../Search/index'

const CaseStudiesContent = () => {
  return (
    <React.Fragment>
      <SearchOptions />
      <AppContainer>
        {caseStudies.map((caseStudy, index) => (
          <Box width={[1, 1, 0.8]} mx="auto" key={`case-study-${index}`}>
            <SingleCaseStudyPreview {...caseStudy} />
          </Box>
        ))}
      </AppContainer>
    </React.Fragment>
  )
}

export default CaseStudiesContent
