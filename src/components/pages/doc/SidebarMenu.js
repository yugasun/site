import React from 'react'
import MetisMenu from 'react-metismenu'
import generatedMenu from 'src/constants/generated-menu-items-new'
import { Text, Box } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
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
    <BoxWithBottomBorder ml={60} mb={22}>
      <ExternalLink to={'https://github.com/serverless/enterprise'}>
        <Text color={['#8c8c8c']} fontSize='14px'>
          framework enterprise
        </Text>
      </ExternalLink>
    </BoxWithBottomBorder>
    <MetisMenu
      content={generatedMenu}
      iconNameStateVisible='dropdown-icon'
      iconNameStateHidden='dropdown-icon'
      activeLinkTo={props.activeLinkTo}
      iconNamePrefix='sls-'
    />
  </Box>
)

export default SidebarMenu
