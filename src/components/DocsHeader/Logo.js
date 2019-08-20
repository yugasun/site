import React from 'react'
import Link from 'gatsby-link'

import { Logo, Row } from 'serverless-design-system'
import logo from 'src/assets/images/logo.svg'
import docsLogo from 'src/assets/images/docs-logo.svg'
import styled from 'styled-components'

const LogoWithDesktopTopMargin = styled(Logo)`
  margin-top: 6px;
`

const LogoWithDesktopLeftMargin = styled(Logo)`
  margin-left: 8px;
`

const NonMobileLink = styled(Link)`
  @media screen and (max-width: 415px) {
    display: none;
  }
`

const LogoComponent = () => (
  <Row alignItems='center'>
    <NonMobileLink to='/'>
      <LogoWithDesktopTopMargin
        src={logo}
        height={['21px', '21px', '21px', '55px']}
        width={['112px', '112px', '112px', '153px']}
        alt='Serverless'
      />
    </NonMobileLink>
    <NonMobileLink to='/framework/docs/'>
      <LogoWithDesktopLeftMargin
        src={docsLogo}
        height={['15px', '15px', '15px', '17px']}
        width={['36px', '36px', '36px', '45px']}
        alt='Serverless'
        ml={'8px'}
      />
    </NonMobileLink>
  </Row>
)

export default LogoComponent
