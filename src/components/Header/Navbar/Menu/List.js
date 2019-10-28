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
import { contactSales, docs, pricing, dashboard } from 'src/constants/urls'
//TODO: double-up - clean this to one file
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

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'Learn'} />
    <LearnMenuDescription>
      <LearnDropdownList />
    </LearnMenuDescription>
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

const ContactSalesMenu = () => (
  <Box>
    <NavLink to={contactSales} completed className='header-menu-item'>
      <MenuTitle name={'Contact Sales'} color='#fd5750' />
    </NavLink>
  </Box>
)

const LoginMenu = () => (
  <Box>
    <NavLink to={dashboard} crossDomain className='header-menu-item'>
      <MenuTitle name={'Sign-in'} color='#fd5750' />
    </NavLink>
  </Box>
)

const RegisterMenu = () => (
  <Box>
    <NavLink to={dashboard} crossDomain className='header-menu-item'>
      <MenuTitle name={'Sign-Up Free'} color='#fd5750' />
    </NavLink>
  </Box>
)

export default [
  ProductMenu,
  DocsMenu,
  PricingMenu,
  LearnMenu,
  ServicesMenu,
  MoreMenu,
  ContactSalesMenu,
  LoginMenu,
  RegisterMenu,

]
