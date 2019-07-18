import React from 'react'
import { Box } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import SingleCoursePreview from './SingleCoursePreview'
import caseStudies from './data'

const CoursesContent = () => {
  return (
    <Box mt={92} pb={[4, 4, 2]}>
      <AppContainer>
        {caseStudies.map((caseStudy, index) => (
          <Box width={1} mx='auto' key={`case-study-${index}`}>
            <SingleCoursePreview {...caseStudy} index={index} />
          </Box>
        ))}
      </AppContainer>
    </Box>
  )
}

export default CoursesContent
