import React from 'react'

import { Flex, Column } from 'serverless-design-system'

import CompanyDetails from './CompanyDetails'
import ProductsColumn from './ProductsColumn'
import DevelopersColumn from './DevelopersColumn'
import LearnColumn from './LearnColumn'
import CommunityColumn from './CommunityColumn'
import CompanyColumn from './CompanyColumn'
import StandaloneColumn from './StandaloneColumn'

// Renders the entire footer list items
const LeftSection = () => (
  <Column width={[1, 1, 0.65]} order={['2', '2', '1']}>
    <Flex width={1} flexWrap='wrap' px={0} mb={4}>
      <ProductsColumn />
      <DevelopersColumn />
      <CommunityColumn />
      <LearnColumn />
      <CompanyColumn />
      <StandaloneColumn />
    </Flex>
    <CompanyDetails />
  </Column>
)

export default LeftSection
