import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Flex } from 'serverless-design-system'

import { AppContainerNew as AppContainer } from 'src/components'
import Form from './Form'
import { Benefits } from 'src/components/pages/form-pages/Content'

const platformBenefits = [
  {
    heading: 'Team Collaboration and Onboarding',
    body: 'Gain and share visibility across all serverless applications, the cloud resources they contain, and their deployments, in a single dashboard.'
  },
  {
    heading: 'Control and Security',
    body: 'Control and secure your development operations with audit logs, cloud credential management, and more.'
  },
  {
    heading: 'Serverless Metrics',
    body: 'Get tracing, error logging, monitoring, and alerts with the click of a button. Native Serverless Framework integration makes the configuration dead simple.'
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
      mb={[0, 0, 132, 132, 300]}
    >
      <Flex.spaceBetween
        flexDirection={['column', 'column', 'column', 'column', 'row']}
      >
        <Box width={[1, 1, 1, 1, 2/5]}>
          <Benefits benefits={platformBenefits} />
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
