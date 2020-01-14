import React from 'react'
import { Box } from 'serverless-design-system'

import MenuTitle from './Title'
import {
  MoreDropdownList,
  LearnDropdownList,
  ProductDropdownList,
} from './DropdownList'
import NavLink from 'src/components/NavLink'
import { community, docsCn, cn } from 'src/constants/urls.cn'
import { LanguageSelect } from 'src/components'
//TODO: double-up - clean this to one file
import MoreMenuDescription from './Descriptions/More'
import LearnMenuDescription from './Descriptions/Learn'
import ProductMenuDescription from './Descriptions/Product'

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
    <NavLink to={docsCn} completed className="header-menu-item">
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

const CommunityMenu = () => (
  <Box>
    <NavLink
      to={community}
      completed={false}
      className="header-menu-item"
      crossDomain={true}
    >
      <MenuTitle name={'社区'} />
    </NavLink>
  </Box>
)

const MoreMenu = () => (
  <Box>
    <MenuTitle name={'更多'} />
    <MoreMenuDescription>
      <MoreDropdownList />
    </MoreMenuDescription>
  </Box>
)

export default [
  ProductMenu,
  DocsMenu,
  LearnMenu,
  CommunityMenu,
  MoreMenu,
  LanguageSelect,
]
