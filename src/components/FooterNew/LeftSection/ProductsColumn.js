import React from 'react'

import FooterListColumn from './Column'
import { products } from 'src/constants/urls'

const PlatformColumn = () => (
  <FooterListColumn
    header='products'
    listItems={[
      {
        name: 'framework',
        navProps: { to: products.framework, completed: true },
      },
      {
        name: 'platform',
        navProps: { to: products.platform, completed: true },
      },
      {
        name: 'support',
        navProps: { to: products.support, completed: true },
      },
    ]}
  />
)

export default PlatformColumn