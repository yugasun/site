import React from 'react'
import styled from 'styled-components'
import { Flex } from 'serverless-design-system'

import Logo from './Logo'
import MobileOptions from './MobileOptions'
import BlogNavbarContext from './BlogNavbarContext'
import { SecondaryButton } from 'src/fragments/DesignSystem'
import NavLink from 'src/components/NavLink'
import { products } from 'src/constants/urls'

const Wrapper = styled(Flex.verticallyCenter)`
  justify-content: space-between;
  transition: padding 0.5s;
`

//TODO: repeated in header - refactor
const Support = () => (
  <NavLink to={products.support} completed className='header-menu-item'>
    <SecondaryButton px={[0, 0, 0, 0, '0.3rem', '0.5rem']} width={['187px', '187px', '187px', '187px', '187px', '207px']}>
    enterprise support
    </SecondaryButton>
  </NavLink>
)

const LogoAndOptions = () => (
  <BlogNavbarContext.Consumer>
    {
      ({ isNavbarShrinked }) => (
        <Wrapper py={[15, 15, isNavbarShrinked ? 0 : 15]}>
          <Logo />
          <Support />
          <MobileOptions />
        </Wrapper>
      )
    }
  </BlogNavbarContext.Consumer>
)

export default LogoAndOptions