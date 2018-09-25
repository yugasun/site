import React from 'react'
import { Box } from 'serverless-design-system'

import Breadcrumbs from 'src/components/Breadcrumbs'
import SearchBox from './SearchBox'

export default ({ url }) => {
  let searchBox
  if (typeof window !== 'undefined' && window.outerWidth < 600) {
    searchBox = (<SearchBox />)
  }
  const breadCrumbContent = (
    <Box className="versionNumber">
      Docs Version: {process.env.GATSBY_DOCS_VERSION}
    </Box>
  )
  return (
    <Box className="breadCrumbContainer docs-breadcrumbs">
      <Breadcrumbs path={url} rightContent={breadCrumbContent} />
      {searchBox}
    </Box>
  )
}
