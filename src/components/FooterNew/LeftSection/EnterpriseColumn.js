import React from 'react'

import FooterListColumn from './Column'
import { enterprise } from 'src/constants/newUrls'

const StandaloneColumn = () => (
  <FooterListColumn
    header='Enterprise'
    headerLink={enterprise}
    listItems={[]}
  />
)

export default StandaloneColumn
