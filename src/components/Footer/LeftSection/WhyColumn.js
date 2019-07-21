import React from 'react'

import FooterListColumn from './Column'
import { why } from 'src/constants/newUrls'

const WhyColumn = ({ mobileOrder }) => (
  <FooterListColumn
    header='Why'
    headerLink={why}
    listItems={[]}
    mobileOrder={mobileOrder}
  />
)

export default WhyColumn
