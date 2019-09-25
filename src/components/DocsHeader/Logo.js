import React from 'react'
import Link from 'gatsby-link'

import { Logo, Row } from 'serverless-design-system'
import logo from 'src/assets/images/logo.svg'
import docsLogo from 'src/assets/images/docs-logo.svg'
import styled from 'styled-components'

const LogoWithDesktopTopMargin = styled(Logo)`
  margin-top: 6px;

  @media screen and (min-width: 992px) and (max-width: 1280px) {
    margin: 15.5px 0;
  }
`

const LogoWithDesktopLeftMargin = styled(Logo)`
  margin-left: 8px;
  @media screen and (min-width: 992px) and (max-width: 1280px) {
    margin-bottom: 2px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1px;
  }
`

const NonMobileLink = styled(Link)`
  @media screen and (max-width: 415px) {
    display: none;
  }
`

const LogoComponent = ({ isNavbarActive }) => (
  <Row alignItems='center' py={[0, 0, 0, 0, '15.5px']}>
    <Link to='/'>
      <LogoWithDesktopTopMargin
        src={logo}
        height={['21px', '21px', '21px', '24px']}
        alt='Serverless'
        
      />
    </Link>
    <NonMobileLink to='/framework/docs/'>
      <LogoWithDesktopLeftMargin
        src={docsLogo}
        height={['11px', '11px', '12px', '14px']}
        alt='Serverless'
        ml={'8px'}
      />
    </NonMobileLink>
  </Row>
)

export default LogoComponent
