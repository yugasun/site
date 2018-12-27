import React from 'react'
import { Box, Row } from 'serverless-design-system'
import Search from './Search'

const MobileOptions = () => (
    <Box display={[ 'block', 'block', 'block', 'block', 'none' ]}>
      <Row>
        <Search />
      </Row>
    </Box>
)

export default MobileOptions
