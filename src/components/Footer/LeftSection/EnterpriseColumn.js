import React from 'react'

import FooterListColumn from './Column'
import { enterprise } from 'src/constants/urls'

const EnterpriseColumn = ({ mobileOrder }) => (
  <FooterListColumn
    header='Enterprise'
    headerLink={enterprise}
    listItems={[]}
    mobileOrder={mobileOrder}
  />
)

export default EnterpriseColumn
