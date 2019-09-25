import React from 'react'
import { Heading, P } from 'src/fragments/DesignSystem'
import { Box, Flex } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/urls.js'

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
      <Flex>
        <P m={0}> • Serverless Framework. &nbsp;</P>
        <ExternalLink to={dashboard}>
          <P
            m={0}
            style={{ borderBottom: '1px solid #fd5750', height: '23px' }}
          >
            Sign up for free
          </P>
        </ExternalLink>
      </Flex>
      <P m={0}>• Text and source code editor</P>
      <P m={0}>• Chrome or Safari browser</P>
    </Box>
  </React.Fragment>
)

export default Requirements
