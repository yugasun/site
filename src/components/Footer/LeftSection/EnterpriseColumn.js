import React from 'react'

import FooterListColumn from './Column'
import { enterprise } from 'src/constants/newUrls'

const EnterpriseColumn = ({ mobileOrder }) => (
  <FooterListColumn
    header='Enterprise'
    headerLink={enterprise}
    listItems={[]}
    mobileOrder={mobileOrder}
  />
)

export default EnterpriseColumn
