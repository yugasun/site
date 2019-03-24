import React from 'react'

import FooterListColumn from './Column'
import { resources } from 'src/constants/urls'

const StandaloneColumn = () => (
  <FooterListColumn header='blog' headerLink={resources.blog} listItems={[]} />
)

export default StandaloneColumn
