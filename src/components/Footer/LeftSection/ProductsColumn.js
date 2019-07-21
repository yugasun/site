import React from 'react'

import FooterListColumn from './Column'
import { framework } from 'src/constants/newUrls'

const ProductsColumn = ({ mobileOrder }) => (
  <FooterListColumn
    header='Product'
    headerLink={framework}
    listItems={[]}
    mobileOrder={mobileOrder}
  />
)

export default ProductsColumn
