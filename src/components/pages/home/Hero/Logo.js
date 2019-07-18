import React from 'react'
import { Image, Box } from 'serverless-design-system'
import slsHeroLogo from 'src/assets/images/home/sls-home-logo.svg'

const Logo = props => (
  <Box mt={[90, 90, 90, 110, 132]} mb={'16px'}>
    <Image src={slsHeroLogo} width={[230, 230, 1]} />
  </Box>
)

export default Logo
