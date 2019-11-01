import React from 'react'
import { Heading, P } from 'src/fragments/DesignSystem'
import { Box } from 'serverless-design-system'

const Description = ({lessonInfo}) => (
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
        {lessonInfo}
      </P>
    </Box>
  </React.Fragment>
)

export default Description
