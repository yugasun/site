import React from 'react'
import { MetisMenu } from 'src/components'
import generatedDocsMenu from 'src/constants/generated-menu-items-new'
import { Box, Text } from 'serverless-design-system'
import { InternalLink } from 'src/fragments'
import { P } from 'src/fragments/DesignSystem'
require('./Sidebar.css')

const SidebarMenu = ({ activeLinkTo }) => (
  <React.Fragment>
    <Box display={['block', 'block', 'none']}>
      <InternalLink to={'/'}>
        <P color={['#8c8c8c']} fontSize='12px' ml={16}>
          {' '}
          &lt; serverless.com &nbsp;
        </P>
      </InternalLink>
    </Box>
    <Box pt={[22, 22, 32, 32, 32]} pr={[28]}>
      <Text
        fontSize='14px'
        lineHeight='24px'
        letterSpacing='0.44px'
        fontFamily='Soleil'
        ml={[16, 16, 22]}
        mb={'5px'}
        color={['#8c8c8c']}
      >
        Serverless Framework Docs
      </Text>
      <MetisMenu
        content={generatedDocsMenu}
        iconNameStateVisible='dropdown-icon'
        iconNameStateHidden='dropdown-icon'
        activeLinkTo={activeLinkTo}
        iconNamePrefix='sls-'
      />
    </Box>
  </React.Fragment>
)

export default SidebarMenu
