import React from 'react'

import { Box, Image } from 'serverless-design-system'
import logo from '../../assets/images/logo.svg'

// Renders the Footer Icon
const FooterIcon = () => (
  <Box pt={[0, 0, 3]}  width={1} display={['block', 'block', 'none', 'none', 'block']}>
    <Image width={[0, 0, '138px']} src={logo} />
  </Box>
)

export default FooterIcon
