import React from 'react'

import FooterListColumn from './Column'
import { training, support } from 'src/constants/urls'

const ServicesColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Services'
    listItems={[
      {
        name: 'Training',
        navProps: { to: training, completed: true },
      },
      {
        name: 'Support',
        navProps: { to: support, completed: true },
      },
    ]}
  />
)

export default ServicesColumn
