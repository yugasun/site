import React from 'react'
import NavLink from 'src/components/NavLink'
import { SecondaryButton } from 'src/fragments/DesignSystem'
import { dashboard } from 'src/constants/newUrls'

const EnterpriseSupportButton = () => (
  <NavLink to={dashboard} completed className='header-menu-item'>
    <SecondaryButton>get started free</SecondaryButton>
  </NavLink>
)

export default EnterpriseSupportButton
