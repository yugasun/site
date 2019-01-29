import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import MenuDescription from './Description'
import {
  ProductDropdownList,
  DeveloperDropdownList,
  LearnDropdownList,
  CommunityDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { resources } from 'src/constants/urls'
import EnterpriseSupportButton from '../../EnterpriseSupportButton'

const ProductMenu = () => (
  <Box>
    <MenuTitle name={'products'} />
    <MenuDescription
      wrapperStyles={{
        minWidth: [0, 0, 0, 0, '412px'],
        px: [0],
        pb: [0],
        pt: [0],
      }}
    >
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
    <NavLink to={resources.blog} completed className='header-menu-item'>
      <MenuTitle name={'blog'} />
    </NavLink>
  </Box>
)

const SupportMenu = () => (
  <Box pt={[2, 2, 2, 2, 0]} pl={[1, 1, 1, 1, 2, 3]}>
    <EnterpriseSupportButton />
  </Box>
)

export default [
  ProductMenu,
  DeveloperMenu,
  CommunityMenu,
  LearnMenu,
  BlogMenu,
  SupportMenu,
]
