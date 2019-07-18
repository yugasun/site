import React from 'react'
import { Box, Container } from 'serverless-design-system'

const AppContainer = ({ children }) => (
  <Container maxWidth={[1216, 1216, 1216, 1216, '76%', 1216]}>
    <Box width={1} px={[30, 30, 40, 40, 0]}>
      {children}
    </Box>
  </Container>
)

export default AppContainer
