import React from 'react'
import { Heading } from 'serverless-design-system'
import NavLink from 'src/components/NavLink'

const SubMenuItem = ({ children, navProps, defaultColor }) => (
  <NavLink {...navProps} className='header-menu-item'>
    <Heading.h6 fontSize={'1.76rem'} fontFamily='Soleil'>
      {children}
    </Heading.h6>
  </NavLink>
)
export default SubMenuItem
