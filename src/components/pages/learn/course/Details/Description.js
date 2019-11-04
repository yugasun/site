import React from 'react'
import { Heading, P } from 'src/fragments/DesignSystem'
import { Box } from 'serverless-design-system'

const Description = ({description}) => (
  <React.Fragment>
    <Box>
      <Heading.h3
        align='left'
        mt={[62, 62, 62, 62, 92]}
        mb={[22, 22, 22, 22, 32]}
      >
        About this course
      </Heading.h3>
      {
        description.split(/\n/g).map((part, index) => (
          <P mb={0} key={index}>
          {part}
          </P>
        ))
      }
    </Box>
  </React.Fragment>
)

export default Description
