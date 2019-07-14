import React from 'react'

import FooterListColumn from './Column'
import { enterprise } from 'src/constants/newUrls'

const EnterpriseColumn = () => (
  <FooterListColumn
    header='Enterprise'
    headerLink={enterprise}
    listItems={[]}
  />
)

export default EnterpriseColumn
