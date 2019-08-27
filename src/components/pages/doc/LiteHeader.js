import React from 'react'
import { Box, Flex, Text } from 'serverless-design-system'

import Breadcrumbs from 'src/components/Breadcrumbs'
import SearchBox from './SearchBox'
import styled from 'styled-components'
import SubHeaderSearchBox from './SubHeaderSearchBox'

const DocsBreadcrumbs = styled(Breadcrumbs)`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.58px;
  color: #8c8c8c !important;
`

const SubHeader = ({ url }) => {
  let searchBox
  if (typeof window !== 'undefined' && window.outerWidth < 600) {
    searchBox = <SearchBox />
  }
  const breadCrumbContent = (
    <Flex alignItems='center'>
      <SubHeaderSearchBox />
    </Flex>
  )
  return (
    <Box className='breadCrumbContainer docs-breadcrumbs'>
      <DocsBreadcrumbs path={url} rightContent={breadCrumbContent} />
      {searchBox}
    </Box>
  )
}

export default SubHeader
