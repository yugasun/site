import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import {
  ServicesDropdownList,
  MoreDropdownList,
  LearnDropdownList,
  ProductDropdownList,
  LanguageDropdownList
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { contactSales, docsCn, pricing, dashboard, cn } from 'src/constants/urls'
//TODO: double-up - clean this to one file
import MoreMenuDescription from './Descriptions/More'
import LearnMenuDescription from './Descriptions/Learn'
import ServicesMenuDescription from './Descriptions/Services'
import ProductMenuDescription from './Descriptions/Product'
import LanguageMenuDescription from './Descriptions/Language'
import imgLanguage from 'src/assets/images/language.svg'

const ProductMenu = () => (
  <Box>
    <MenuTitle name={'产品'} />
    <ProductMenuDescription>
      <ProductDropdownList />
    </ProductMenuDescription>
  </Box>
)

const DocsMenu = () => (
  <Box>
    <NavLink to={docsCn} completed className='header-menu-item'>
      <MenuTitle name={'文档'} />
    </NavLink>
  </Box>
)

// const PricingMenu = () => (
//   <Box>
//     <NavLink to={pricing} completed className='header-menu-item'>
//       <MenuTitle name={'Pricing'} />
//     </NavLink>
//   </Box>
// )

// const ServicesMenu = () => (
//   <Box>
//     <MenuTitle name={'Services'} />
//     <ServicesMenuDescription>
//       <ServicesDropdownList />
//     </ServicesMenuDescription>
//   </Box>
// )

const LearnMenu = () => (
  <Box>
    <MenuTitle name={'学习'} />
    <LearnMenuDescription>
      <LearnDropdownList />
    </LearnMenuDescription>
  </Box>
)

const MoreMenu = () => (
  <Box>
    <MenuTitle name={'社区'} />
    <MoreMenuDescription>
      <MoreDropdownList />
    </MoreMenuDescription>
  </Box>
)

// const ContactSalesMenu = () => (
//   <Box>
//     <NavLink to={contactSales} completed className='header-menu-item'>
//       <MenuTitle name={'Contact Sales'} color='#fd5750' />
//     </NavLink>
//   </Box>
// )

// const LoginMenu = () => (
//   <Box>
//     <NavLink to={dashboard} crossDomain className='header-menu-item'>
//       <MenuTitle name={'登录'} color='#fd5750' />
//     </NavLink>
//   </Box>
// )

// const RegisterMenu = () => (
//   <Box>
//     <NavLink to={dashboard} crossDomain className='header-menu-item'>
//       <MenuTitle name={'注册'} color='#fd5750' />
//     </NavLink>
//   </Box>
// )


// <img src={imgLanguage} style={{display:'float'}} />
const LanguageMenu = ({pathName}) => (
  <Box>
    <MenuTitle name={pathName.indexOf('/'+cn) === 0 ? "简体中文" : "English"} />
      <MoreMenuDescription>
      <LanguageDropdownList />
    </MoreMenuDescription>
  </Box>
)


export default [
  ProductMenu,
  DocsMenu,
  // PricingMenu,
  LearnMenu,
  // ServicesMenu,
  MoreMenu,
  // ContactSalesMenu,
  // LoginMenu,
  // RegisterMenu,
  LanguageMenu
]
