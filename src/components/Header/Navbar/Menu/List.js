import React from 'react'
import { Box, Button } from 'serverless-design-system'

import MenuTitle from './Title'
import MenuDescription from './Description'
import {
  PlatformDropdownList,
  DeveloperDropdownList,
  LearnDropdownList,
  CommunityDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { enterprise } from 'src/constants/urls'

const PlatformMenu = () => (
  <Box>
    <MenuTitle name={'products'} />
    <MenuDescription wrapperStyles={{ minWidth: [0, 0, '320px']}}>
      <PlatformDropdownList />
    </MenuDescription>
  </Box>
)

const DeveloperMenu = () => (
  <Box>
    <MenuTitle name={'developers'} />
    <MenuDescription
      wrapperStyles={{
        minWidth: [0, 0, '498px'],
        px: 5,
      }}
    >
      <DeveloperDropdownList />
    </MenuDescription>
  </Box>
)

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'learn'} />
    <MenuDescription>
      <LearnDropdownList />
    </MenuDescription>
  </Box>
)

const CommunityMenu = () => (
  <Box>
    <MenuTitle name={'community'} />
    <MenuDescription>
      <CommunityDropdownList />
    </MenuDescription>
  </Box>
)

const BlogMenu = () => (
  <Box pt={[2, 2, 0]} pl={[1, 1, 2]}>
    <NavLink to={enterprise} completed>
      <MenuTitle name={'blog'} />
    </NavLink>
  </Box>
)

const EnterpriseMenu = () => (
  <Box pt={[2, 2, 0]} pl={[1, 1, 2]}>
    <NavLink to={enterprise} completed>
      <Button fontSize={'1.5rem'} px={2} py={'16px'} width={'176px'}>
        enterprise
      </Button>
    </NavLink>
  </Box>
)

export default [
  PlatformMenu,
  DeveloperMenu,
  CommunityMenu,
  LearnMenu,
  BlogMenu,
  EnterpriseMenu,
]
