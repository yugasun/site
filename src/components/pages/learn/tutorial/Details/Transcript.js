import React from 'react'
import { Heading, P } from 'src/fragments/DesignSystem'
import { Box, Flex } from 'serverless-design-system'

const Requirements = ({transcript}) => (
  <React.Fragment>
    <Box>
      <Heading.h3
        align='left'
        mt={[62, 62, 62, 62, 62]}
        mb={[22, 22, 22, 22, 32]}
      >
        Transcript
      </Heading.h3>
      <Flex style={{backgroundColor: '#f7f7f7', maxHeight: '300px', overflowY: 'scroll'}} p={20}>
        <P fontFamily='Soleil'>{transcript}
      </P>
      </Flex>
    </Box>
  </React.Fragment>
)

export default Requirements
