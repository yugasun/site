import React from 'react'
import Link from 'gatsby-link'

import { Logo } from 'serverless-design-system'
import logo from 'src/assets/images/logo.svg'

const LogoComponent = () => (
  <Link to='/'>
    <Logo
      src={logo}
      height={['21px', '21px', '21px', '64px']}
      width={['124px', '124px', '124px', '153px']}
      alt='Serverless'
    />
  </Link>
)

export default LogoComponent