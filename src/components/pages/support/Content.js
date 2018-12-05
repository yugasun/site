import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Flex } from 'serverless-design-system'

import { AppContainerNewest as AppContainer } from 'src/components'
import Form from './Form'
import { Benefits } from 'src/components/pages/form-pages/Content'

const supportBenefits = [
  {
    heading: 'World-class support',
    body: 'Get collaborative, world-class support from the team that brought you the Serverless Framework and innovated the Serverless application.'
  },
  {
    heading: 'Serverless Enablement',
    body: 'Work with Serverless and cloud services experts who can help you successfully build, deploy, and manage your serverless applications.'
  },
  {
    heading: 'Serverless Training',
    body: 'Enable your team with the most proven Serverless development practices. We offer comprehensive workshops both in-person and remote.'
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
      mb={[0, 0, 52, 52, 350]}
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
