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
  color: #9b9b9b !important;

  &:hover {
    color: #9b9b9b;
  }
`

const SubHeader = ({ url }) => {
  let searchBox
  if (typeof window !== 'undefined' && window.outerWidth < 600) {
    searchBox = <SearchBox />
  }
  const breadCrumbContent = (
    <Flex alignItems='center'>
      <Box className='versionNumber' width={0.5}>
        <Text fontFamily='Soleil'>
          version {process.env.GATSBY_DOCS_VERSION} (current)
        </Text>
      </Box>
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
