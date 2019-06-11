import React from 'react'
import { MetisMenu } from 'src/components'
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

const SidebarMenu = ({ activeLinkTo }) => (
  <Box pt={[32, 32, 32, 32, 26]} pr={[28]}>
    <MetisMenu
      content={generatedEnterpriseDocsMenu}
      iconNameStateVisible='dropdown-icon'
      iconNameStateHidden='dropdown-icon'
      classNameLinkActive='active-menu'
      activeLinkTo={activeLinkTo}
      iconNamePrefix='sls-'
    />
    <BoxWithBottomBorder ml={60} mb={22} />
    <MetisMenu
      content={generatedDocsMenu}
      iconNameStateVisible='dropdown-icon'
      iconNameStateHidden='dropdown-icon'
      activeLinkTo={activeLinkTo}
      iconNamePrefix='sls-'
    />
  </Box>
)

export default SidebarMenu
