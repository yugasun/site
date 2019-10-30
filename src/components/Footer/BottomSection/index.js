import React from 'react'
import { Flex, Image, Text, Box } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import SocialIcons from './SocialIcons'
import logoBlack from 'src/assets/images/logo-black.svg'
import { contact } from 'src/constants/urls'
import styled from 'styled-components'

const SpaceBetweenMobileBox = styled(Box)`
  @media only screen and (max-width: 415px) {
    justify-content: space-between;
  }
`

const SmallGrayText = ({ children }) => (
  <Text
    fontFamily='SoleilBk'
    lineHeight='24px'
    letterSpacing='0.44px'
    color='#8c8c8c'
    fontSize='14px'
    align={['center', 'center', 'left']}
  >
    {children}
  </Text>
)

const BottomSection = () => (
  <Flex
    justifyContent={['space-between']}
    width={1}
    flexDirection={['column', 'column', 'column', 'column', 'row']}
  >
    <SpaceBetweenMobileBox
      display={['flex', 'flex', 'none', 'none', 'block']}
      mx={[30, 30, 0]}
      mb={[32, 32, 0]}
    >
      <Image src={logoBlack} width={153} height={26} />
      <Box display={['block', 'block', 'none']} ml={32}>
        <SocialIcons />
      </Box>
    </SpaceBetweenMobileBox>

    <Flex mx={[30, 30, 40, 40, 0]}>
      <Box display={['none', 'none', 'block']}>
        <SocialIcons />
      </Box>
      <Flex ml={[0, 0, 0, 0, 22]}>
        <ExternalLink to={contact}>
          <SmallGrayText>
            hello@serverless.com - Copyright © 2019 Serverless, Inc. All rights
            reserved.
          </SmallGrayText>
        </ExternalLink>
      </Flex>
    </Flex>
  </Flex>
)

export default BottomSection
