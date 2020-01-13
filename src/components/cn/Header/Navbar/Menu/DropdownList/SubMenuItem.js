import React from 'react'
import { Heading } from 'serverless-design-system'
import NavLink from 'src/components/NavLink'
import styled from 'styled-components'

const HeadingWithHover = styled(Heading.h6)`
  @media screen and (min-width: 1280px) {
    &:hover {
      color: #000;
    }
  }
`

const SubMenuItem = ({ children, navProps, defaultColor }) => (
  <NavLink {...navProps} className='header-menu-item'>
    <HeadingWithHover
      fontSize={'16px'}
      lineHeight='38px'
      letterSpacing='0'
      fontFamily='SoleilBk'
      color={['#fff', '#fff', '#fff', '#fff', '#8c8c8c']}
    >
      {children}
    </HeadingWithHover>
  </NavLink>
)
export default SubMenuItem
