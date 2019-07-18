import React from 'react'
import { Absolute, Background, Box } from 'serverless-design-system'

const WhiteBlank = () => (
  <Box
    display={['none', 'none', 'none', 'none', 'block']}
    mt={[0, 0, 0, 0, -70, 0]}
  >
    <Absolute left='0'>
      <Background background='white' width='400px' height='350px' />
    </Absolute>
  </Box>
)

export default WhiteBlank
