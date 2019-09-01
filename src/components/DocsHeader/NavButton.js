import React from 'react'

import { Box, Image, Flex } from 'serverless-design-system'
import NavbarContext from './NavbarContext'

import closeIcon from 'src/assets/images/icon-close.png'
import mobileMenuIcon from 'src/assets/images/icon-mobile-menu.png'
import searchIcon from 'src/assets/images/search-icon-gray.svg'

const NavButton = () => (
  <NavbarContext.Consumer>
    {({ isNavbarActive, toggleNavbarActiveness }) => (
      <Flex>
        <Box
          mr={'16px'}
          height='16px'
          width='18px'
          display={
            isNavbarActive ? 'none' : ['flex', 'flex', 'none', 'none', 'none']
          }
          onClick={toggleNavbarActiveness}
        >
          <Box m='auto'>
            <Image
              src={searchIcon}
              maxWidth={isNavbarActive ? ['65%', '65%', '100%'] : ['100%']}
            />
          </Box>
        </Box>
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
      </Flex>
    )}
  </NavbarContext.Consumer>
)

export default NavButton
