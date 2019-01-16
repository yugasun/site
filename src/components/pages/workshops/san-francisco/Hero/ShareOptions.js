import React from 'react'
import { Flex, Image, Text } from 'serverless-design-system'
import styled from 'styled-components'
import facebookLogo from 'src/assets/images/facebook.svg'
import twitterLogo from 'src/assets/images/twitter.svg'
import linkedinLogo from 'src/assets/images/linkedin-gray.svg'
import { ExternalLink } from 'src/fragments'

const NoMobileFlex = styled(Flex)`
  width: 100%;

  @media screen and (max-width: 415px) {
    display: none;
  }
`

const ShareOptions = () => (
  <NoMobileFlex justifyContent='space-evenly' ml={['5.5%']} mt={'8px'}>
    <Text color='gray.2'>Share with</Text>
    <ExternalLink><Image src={facebookLogo} /></ExternalLink>
    <ExternalLink><Image src={twitterLogo} /></ExternalLink>
    <ExternalLink><Image src={linkedinLogo} /></ExternalLink>
  </NoMobileFlex>
)

export default ShareOptions
