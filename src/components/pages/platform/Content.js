import React from 'react'
import { withTheme } from 'styled-components'
import { Box, Flex, P } from 'serverless-design-system'

import { AppContainerNewest as AppContainer } from 'src/components'
import Form from './Form'
import Benefits from './Benefits'

const Content = ({ theme }) => (
  <AppContainer>
    <Box
      pt={[
        theme.navbarHeights.mobile,
        theme.navbarHeights.mobile,
        theme.navbarHeights.desktop,
      ]}
      mb={[0, 0, 300]}
    >
      <Flex.spaceBetween
        flexDirection={['column', 'column', 'row']}
      >
        <Box width={[1, 1, 2/5]}>
          <Benefits />
        </Box>
        <Box
          width={[1, 1, 1/2]}
        >
          <Form />
        </Box>
      </Flex.spaceBetween>
    </Box>
  </AppContainer>
)

export default withTheme(Content)
