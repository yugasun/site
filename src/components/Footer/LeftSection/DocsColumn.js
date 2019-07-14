import React from 'react'

import FooterListColumn from './Column'
import { docs } from 'src/constants/newUrls'

const DocsColumn = () => (
  <FooterListColumn header='Docs' headerLink={docs} listItems={[]} />
)

export default DocsColumn
