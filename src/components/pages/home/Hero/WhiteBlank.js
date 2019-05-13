import React from 'react'
import { Absolute, Background, Box } from 'serverless-design-system'

const WhiteBlank = () => (
  <Box display={['none', 'none', 'none', 'none', 'block']}>
    <Absolute bottom={['0%', '0%', '0%', '0%', '-50%', '-20%']} left='0'>
      <Background background='white' width='400px' height='500px' />
    </Absolute>
  </Box>
)

export default WhiteBlank
