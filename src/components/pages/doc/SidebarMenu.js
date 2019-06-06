import React from 'react'
import MetisMenu from 'react-metismenu'
import generatedDocsMenu from 'src/constants/generated-menu-items-new'
import generatedEnterpriseDocsMenu from 'src/constants/generated-enterprise-menu-items-new'
import { Box } from 'serverless-design-system'
import styled from 'styled-components'
require('./Sidebar.css')

const BoxWithBottomBorder = styled(Box)`
  border-bottom: 2px solid #e4e2e2;
  padding-bottom: 32px;
  width: 80%;

  @media screen and (max-width: 1025px) {
    border-bottom: 2px solid #5b5b5b;
  }
`

const SidebarMenu = props => (
  <Box pt={[42, 42, 42, 42, 92]} pr={[28]}>
    <MetisMenu
      content={generatedEnterpriseDocsMenu}
      iconNameStateVisible='dropdown-icon'
      iconNameStateHidden='dropdown-icon'
      activeLinkTo={props.activeLinkTo}
      iconNamePrefix='sls-'
    />
    <BoxWithBottomBorder ml={60} mb={22} />
    <MetisMenu
      content={generatedDocsMenu}
      iconNameStateVisible='dropdown-icon'
      iconNameStateHidden='dropdown-icon'
      activeLinkTo={props.activeLinkTo}
      iconNamePrefix='sls-'
    />
  </Box>
)

export default SidebarMenu
