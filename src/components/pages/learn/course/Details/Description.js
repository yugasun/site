import React from 'react'
import { Heading, P } from 'src/fragments/DesignSystem'
import { Box } from 'serverless-design-system'

const Description = props => (
  <React.Fragment>
    <Box>
      <Heading.h3
        align='left'
        mt={[62, 62, 62, 62, 92]}
        mb={[22, 22, 22, 22, 32]}
      >
        About this course
      </Heading.h3>
      <P m={0}>
      The aim of this course is to take you from being new to Serverless to building a multi-service, fully production ready application on AWS. We will cover the full life-cycle, from developing locally, setting up the interactions between multiple services, getting ready for production, monitoring, CI/CD and a lot more. It assumes no previous knowledge of Serverless, just that you understand the basics around developing web applications. The course is also very modular, so if you all you need is a reference to specific sections you can access those as well to answer those questions you may have.{' '}
      </P>
    </Box>
  </React.Fragment>
)

export default Description
