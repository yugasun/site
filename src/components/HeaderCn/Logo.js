import React from 'react'
import Link from 'gatsby-link'

import { Logo } from 'serverless-design-system'
import logo from 'src/assets/images/logo.svg'
import logoBlack from 'src/assets/images/logo-black.svg'
import styled from 'styled-components'
import NavbarContext from './NavbarContext'

const LogoWithDesktopTopMargin = styled(Logo)`
  @media screen and (min-width: 1200px) {
    margin-top: 6px;
  }
`

const LogoComponent = () => (
  <NavbarContext.Consumer>
    {({ isWhiteHeader, isDesktopView }) => (
      <Link to='/'>
        <LogoWithDesktopTopMargin
          src={isWhiteHeader && isDesktopView ? logoBlack : logo}
          height={['24px']}
          alt='Serverless'
        />
      </Link>
    )}
  </NavbarContext.Consumer>
)

export default LogoComponent
