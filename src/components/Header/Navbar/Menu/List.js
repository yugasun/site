import React from 'react'
import { Box, Button } from 'serverless-design-system'

import MenuTitle from './Title'
import MenuDescription from './Description'
import {
  ProductDropdownList,
  DeveloperDropdownList,
  LearnDropdownList,
  CommunityDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { enterprise, resources } from 'src/constants/urls'

const ProductMenu = () => (
  <Box>
    <MenuTitle name={'products'} />
    <MenuDescription wrapperStyles={{ minWidth: [0, 0, '320px'], pr: [1, 1, 0], pb: [3] }} >
      <ProductDropdownList />
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
  <Box>
    <NavLink to={resources.blog} completed>
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
  ProductMenu,
  DeveloperMenu,
  CommunityMenu,
  LearnMenu,
  BlogMenu,
  EnterpriseMenu,
]
