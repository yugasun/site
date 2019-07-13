import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import { ResourcesDropdownList, CommunityDropdownList } from './DropdownList'
import NavLink from 'src/components/NavLink'
import { why, enterprise, docs, framework } from 'src/constants/newUrls'
import HeaderCTAButton from '../../HeaderCTAButton'
import CommunityMenuDescription from './Descriptions/Community'
import ResourcesMenuDescription from './Descriptions/Resources'

const ProductMenu = () => (
  <Box>
    <NavLink to={framework} completed className='header-menu-item'>
      <MenuTitle name={'product'} />
    </NavLink>
  </Box>
)

const DocsMenu = () => (
  <Box>
    <NavLink to={docs} completed className='header-menu-item'>
      <MenuTitle name={'docs'} />
    </NavLink>
  </Box>
)

const ResourcesMenu = () => (
  <Box>
    <MenuTitle name={'resources'} />
    <ResourcesMenuDescription>
      <ResourcesDropdownList />
    </ResourcesMenuDescription>
  </Box>
)

const CommunityMenu = () => (
  <Box>
    <MenuTitle name={'community'} />
    <CommunityMenuDescription>
      <CommunityDropdownList />
    </CommunityMenuDescription>
  </Box>
)

const WhyMenu = () => (
  <Box>
    <NavLink to={why} completed className='header-menu-item'>
      <MenuTitle name={'why'} />
    </NavLink>
  </Box>
)

const EnterpriseMenu = () => (
  <Box>
    <NavLink to={enterprise} completed className='header-menu-item'>
      <MenuTitle name={'enterprise'} />
    </NavLink>
  </Box>
)

const SupportMenu = () => (
  <Box pt={[2, 2, 2, 2, 0]} pl={[1, 1, 1, 1, 2, 1]}>
    <HeaderCTAButton />
  </Box>
)

export default [
  ProductMenu,
  DocsMenu,
  ResourcesMenu,
  CommunityMenu,
  WhyMenu,
  EnterpriseMenu,
  SupportMenu,
]
