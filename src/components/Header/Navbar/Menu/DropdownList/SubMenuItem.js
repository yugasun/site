import React from 'react'
import { Heading } from 'serverless-design-system'
import NavLink from 'src/components/NavLink'

const SubMenuItem = ({ children, navProps, defaultColor }) => (
  <NavLink {...navProps}>
    <Heading.h6 fontSize={'1.76rem'} color={defaultColor ? defaultColor: ''}>{children}</Heading.h6>
  </NavLink>
)
export default SubMenuItem