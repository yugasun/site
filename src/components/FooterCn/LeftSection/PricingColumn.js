import React from 'react'

import FooterListColumn from './Column'
import { pricing } from 'src/constants/urls'

const PricingColumn = ({ mobileOrder }) => (
  <FooterListColumn
    header='Pricing'
    headerLink={pricing}
    listItems={[]}
    mobileOrder={mobileOrder}
  />
)

export default PricingColumn
