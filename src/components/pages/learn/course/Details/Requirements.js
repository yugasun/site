import React from 'react'
import { Heading, P, Flex } from 'src/fragments/DesignSystem'
import { Box } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/newUrls.js'

const Requirements = props => (
  <React.Fragment>
    <Box>
      <Heading.h3
        align='left'
        mt={[62, 62, 62, 62, 62]}
        mb={[22, 22, 22, 22, 32]}
      >
        Requirements
      </Heading.h3>
      <P m={0}> • Serverless Framework. Sign up for free</P>
      <P m={0}>• Text and source code editor</P>
      <P m={0}>• Chrome or Safari browser</P>
    </Box>
  </React.Fragment>
)

export default Requirements
