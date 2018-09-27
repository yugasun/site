import React from 'react'
import { Box, Row } from 'serverless-design-system'
import NavButton from './NavButton'
import Search from './Search'

export default () => (
  <Box display={[ 'block', 'block', 'none' ]}>
    <Row>
      <Search />
      <NavButton />
    </Row>
  </Box>
)
