import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Flex } from 'serverless-design-system'

import { AppContainerNewest as AppContainer } from 'src/components'
import Form from './Form'
import { Benefits } from 'src/components/pages/form-pages/Content'

const enterpriseBenefits = [
  {
    heading: 'Get Support',
    body: 'Get 24-hour support from the team behind the Serverless Framework and the Serverless Platform.'
  },
  {
    heading: 'Gain Visibility',
    body: 'Get team access to the Serverless Dashboard, the vendor-neutral Serverless operations console.'
  },
  {
    heading: 'Standardize Development',
    body: 'Get custom templates with policy enforcement to help standardize development across teams and onboard new team-members quickly.'
  }
]

const Content = ({ theme }) => (
  <AppContainer>
    <Box
      pt={[
        theme.navbarHeights.mobile,
        theme.navbarHeights.mobile,
        theme.navbarHeights.desktop,
      ]}
      mb={[0, 0, 52, 52, 290]}
    >
      <Flex.spaceBetween
        flexDirection={['column', 'column', 'column', 'column', 'row']}
      >
        <Box width={[1, 1, 1, 1, 2/5]}>
          <Benefits benefits={enterpriseBenefits} />
        </Box>
        <Box
          width={[1, 1, 1, 1, 1/2]}
        >
          <Form />
        </Box>
      </Flex.spaceBetween>
    </Box>
  </AppContainer>
)

export default withTheme(Content)
