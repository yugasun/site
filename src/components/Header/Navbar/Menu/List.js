import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import {
  ServicesDropdownList,
  MoreDropdownList,
  LearnDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import {
  enterprise,
  docs,
  framework,
  pricing,
  dashboard,
} from 'src/constants/newUrls'
import HeaderCTAButton from '../../HeaderCTAButton'
import MoreMenuDescription from './Descriptions/More'
import LearnMenuDescription from './Descriptions/Learn'
import ServicesMenuDescription from './Descriptions/Services'

const ProductMenu = () => (
  <Box>
    <NavLink to={framework} completed className='header-menu-item'>
      <MenuTitle name={'Product'} />
    </NavLink>
  </Box>
)

const DocsMenu = () => (
  <Box>
    <NavLink to={docs} completed className='header-menu-item'>
      <MenuTitle name={'Docs'} />
    </NavLink>
  </Box>
)

const PricingMenu = () => (
  <Box>
    <NavLink to={pricing} completed className='header-menu-item'>
      <MenuTitle name={'Pricing'} />
    </NavLink>
  </Box>
)

const ServicesMenu = () => (
  <Box>
    <MenuTitle name={'Services'} />
    <ServicesMenuDescription>
      <ServicesDropdownList />
    </ServicesMenuDescription>
  </Box>
)

const MoreMenu = () => (
  <Box>
    <MenuTitle name={'More'} />
    <MoreMenuDescription>
      <MoreDropdownList />
    </MoreMenuDescription>
  </Box>
)

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'Learn'} />
    <LearnMenuDescription>
      <LearnDropdownList />
    </LearnMenuDescription>
  </Box>
)

const EnterpriseMenu = () => (
  <Box>
    <NavLink to={enterprise} completed className='header-menu-item'>
      <MenuTitle name={'Contact Sales'} />
    </NavLink>
  </Box>
)

const LoginMenu = () => (
  <Box>
    <NavLink to={dashboard} completed className='header-menu-item'>
      <MenuTitle name={'Login'} />
    </NavLink>
  </Box>
)

const CTAMenu = () => (
  <Box pt={[2, 2, 2, 2, 0]} pl={[1, 1, 1, 1, 2, 1]} pb={[2, 2, 2, 2, 0]}>
    <HeaderCTAButton />
  </Box>
)

export default [
  ProductMenu,
  DocsMenu,
  ServicesMenu,
  PricingMenu,
  LearnMenu,
  MoreMenu,
  EnterpriseMenu,
  LoginMenu,
  CTAMenu,
]
