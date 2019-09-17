import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import {
  ServicesDropdownList,
  MoreDropdownList,
  LearnDropdownList,
  ProductDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { enterprise, docs, pricing, dashboard } from 'src/constants/newUrls'
//TODO: double-up - clean this to one file
import HeaderCTAButton from '../../HeaderCTAButton'
import MoreMenuDescription from './Descriptions/More'
import LearnMenuDescription from './Descriptions/Learn'
import ServicesMenuDescription from './Descriptions/Services'
import ProductMenuDescription from './Descriptions/Product'

const ProductMenu = () => (
  <Box>
    <MenuTitle name={'Product'} />
    <ProductMenuDescription>
      <ProductDropdownList />
    </ProductMenuDescription>
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
      <MenuTitle name={'Contact Sales'} color='#fd5750' />
    </NavLink>
  </Box>
)

const LoginMenu = () => (
  <Box>
    <NavLink to={dashboard} completed className='header-menu-item'>
      <MenuTitle name={'Login'} color='#fd5750' />
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
