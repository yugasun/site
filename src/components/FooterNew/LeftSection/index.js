import React from 'react'

import { Flex, Column } from 'serverless-design-system'

import CompanyDetails from './CompanyDetails'
import DocsColumn from './DocsColumn'
import ProductsColumn from './ProductsColumn'
import ResourcesColumn from './ResourcesColumn'
import LearnColumn from './LearnColumn'
import CommunityColumn from './CommunityColumn'
import CompanyColumn from './CompanyColumn'
import EnterpriseColumn from './EnterpriseColumn'

// Renders the entire footer list items
const LeftSection = () => (
  <Column width={[1, 1, 1, 1, 0.65]} order={['2', '2', '2', '2', '1']}>
    <Flex width={1} flexWrap='wrap' px={0} mb={[62, 62, 52]}>
      <ProductsColumn />
      <DocsColumn />
      <ResourcesColumn />
      <CommunityColumn />
      <LearnColumn />
      <EnterpriseColumn />
      <CompanyColumn />
    </Flex>
    <CompanyDetails />
  </Column>
)

export default LeftSection
