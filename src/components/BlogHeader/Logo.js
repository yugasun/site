import React from 'react'
import Link from 'gatsby-link'

import { Logo, Row } from 'serverless-design-system'
import logo from 'src/assets/images/logo.svg'
import blogLogo from 'src/assets/images/blog-logo.svg'
import styled from 'styled-components'
import { blog } from 'src/constants/urls'

const LogoWithDesktopLeftMargin = styled(Logo)`
  @media screen and (min-width: 1000px) {
    margin-left: 8px;
  }
`

const LogoComponent = () => (
  <Row alignItems='center'>
    <Link to='/'>
      <Logo
        src={logo}
        height={['20px', '20px', '20px', '26px']}
        width={['112px', '112px', '112px', '154px']}
        alt='Serverless Blog'
      />
    </Link>
    <Link to={blog}>
      <LogoWithDesktopLeftMargin
        src={blogLogo}
        height={['15px', '15px', '15px', '21px']}
        width={['46px', '46px', '46px', '42px']}
        alt='Serverless'
        ml={'8px'}
      />
    </Link>
  </Row>
)

export default LogoComponent
