import React from 'react'

import FooterListColumn from './Column'
import { products, enterprise } from 'src/constants/urls'

const PlatformColumn = () => (
  <FooterListColumn
    header='products'
    listItems={[
      {
        name: 'open source',
        navProps: { to: products.framework, completed: true },
      },
      {
        name: 'enterprise',
        navProps: { to: enterprise, completed: true },
      },
    ]}
  />
)

export default PlatformColumn
