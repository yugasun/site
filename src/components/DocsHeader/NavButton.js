import React from 'react'

import { Box, Image } from 'serverless-design-system'
import NavbarContext from './NavbarContext'

import closeIcon from 'src/assets/images/icon-close.png'
import mobileMenuIcon from 'src/assets/images/icon-mobile-menu.png'

const NavButton = () => (
  <NavbarContext.Consumer>
    {({ isNavbarActive, toggleNavbarActiveness }) => (
      <Box
        height='16px'
        width='18px'
        display={['flex', 'flex', 'flex', 'flex', 'none']}
        onClick={toggleNavbarActiveness}
      >
        <Box m='auto'>
          <Image
            src={isNavbarActive ? closeIcon : mobileMenuIcon}
            maxWidth={isNavbarActive ? ['65%', '65%', '100%'] : ['100%']}
          />
        </Box>
      </Box>
    )}
  </NavbarContext.Consumer>
)

export default NavButton
