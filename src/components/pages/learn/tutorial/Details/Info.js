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
        Lesson Info
      </Heading.h3>
      <P m={0}>
        Serverless services only cost you when they are actually executing. This
        is important. To be a truly serverless service, there needs to be no
        idle running cost.{' '}
      </P>
    </Box>
  </React.Fragment>
)

export default Description
