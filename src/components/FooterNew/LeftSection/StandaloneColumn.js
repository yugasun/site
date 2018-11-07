import React from 'react'

import FooterListColumn from './Column'
import { resources, enterprise } from 'src/constants/urls'

const StandaloneColumn = () => (
  <FooterListColumn
    header='blog'
    headerLink={resources.blog}
    listItems={[
      {
        name: 'enterprise',
        navProps: { to: enterprise, completed: true },
        defaultOpacity: true
      },
    ]}
  />
)

export default StandaloneColumn