import React from 'react'

import FooterListColumn from './Column'
import { docs } from 'src/constants/urls.cn'

const DocsColumn = ({ mobileOrder }) => (
  <FooterListColumn
    header="文档"
    headerLink={docs}
    listItems={[]}
    mobileOrder={mobileOrder}
  />
)

export default DocsColumn
