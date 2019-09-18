import React from 'react'
import { Flex, Image, Text } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import SocialIcons from './SocialIcons'
import logoBlack from 'src/assets/images/logo-black.svg'
import { termsOfService, privacyPolicy, contact } from 'src/constants/newUrls'

const SmallGrayText = ({ children }) => (
  <Text
    fontFamily='SoleilBk'
    lineHeight='24px'
    letterSpacing='0.44px'
    color='#8c8c8c'
    fontSize='14px'
  >
    {children}
  </Text>
)

const BottomSection = () => (
  <Flex
    justifyContent='space-between'
    width={1}
    flexDirection={['column', 'column', 'column', 'column', 'row']}
  >
    <Image src={logoBlack} width={153} height={26} />
    <Flex>
      <ExternalLink to={termsOfService}>
        <SmallGrayText>terms of service </SmallGrayText>
      </ExternalLink>
      &nbsp;
      <ExternalLink to={privacyPolicy}>
        <SmallGrayText> | privacy policy</SmallGrayText>
      </ExternalLink>
    </Flex>
    <SocialIcons />
    <Flex>
      <ExternalLink to={contact}>
        <SmallGrayText>support@serverless.com</SmallGrayText>
      </ExternalLink>
      &nbsp;&nbsp;
      <SmallGrayText>
        - &nbsp; Copyright © 2019 Serverless, Inc. All rights reserved.
      </SmallGrayText>
    </Flex>
  </Flex>
)

export default BottomSection
