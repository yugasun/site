import React from 'react'

import FooterListColumn from './Column'
import { docs } from 'src/constants/urls'

const DocsColumn = ({ mobileOrder }) => (
  <FooterListColumn
    header='Docs'
    headerLink={docs}
    listItems={[]}
    mobileOrder={mobileOrder}
  />
)

export default DocsColumn
