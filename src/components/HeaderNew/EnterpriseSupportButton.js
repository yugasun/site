import React from 'react'
import NavLink from 'src/components/NavLink'
import { SecondaryButton } from 'src/fragments/DesignSystem'
import { products } from 'src/constants/urls'

const EnterpriseSupportButton = () => (
    <NavLink to={products.support} completed className='header-menu-item'>
      <SecondaryButton px={[0, 0, 0, 0, '0.3rem', '0.5rem']} width={['187px', '187px', '187px', '187px', '187px', '207px']}>
      enterprise support
      </SecondaryButton>
    </NavLink>
)

export default EnterpriseSupportButton