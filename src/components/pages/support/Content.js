import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Flex } from 'serverless-design-system'

import { AppContainerNewest as AppContainer } from 'src/components'
import Form from './Form'
import { Benefits } from 'src/components/pages/form-pages/Content'

const supportBenefits = [
  {
    heading: 'Support and Best Practices',
    body: 'Get dedicated support from the team that brought you the Serverless Framework: configuration and implementation guidance, architectural design, establishing use cases, onboarding team members, scaling serverless development, troubleshooting, and more.'
  },
  {
    heading: 'Training and Workshops',
    body: 'Custom onsite workshop with a Serverless Solutions Architect to solidify best practices across your development team: design patterns, DevOps strategies, CI/CD, security, operations, deployments, and more.'
  },
  {
    heading: 'Development Services',
    body: 'The Framework supports an extensible, plugin-powered architecture. Our engineers can work with you to build custom plugins, components, and integrations to enhance your workflow.'
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
      mb={[0, 0, 52, 52, 227]}
    >
      <Flex.spaceBetween
        flexDirection={['column', 'column', 'column', 'column', 'row']}
      >
        <Box width={[1, 1, 1, 1, 2/5]}>
          <Benefits benefits={supportBenefits} />
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
