import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Column,
  InlineBlock,
  P,
  Flex
} from 'serverless-design-system'

import NavLink from '../NavLink'
import NewsLetterForm from '../NewNewsLetterForm'
import {
  facebookHandle,
  instagramHandle,
  twitterHandle,
  githubHandle,
  linkedinHandle
} from 'src/constants/urls'
import facebookGrayIcon from 'src/assets/images/facebook.svg'
import instagramGrayIcon from 'src/assets/images/instagram.svg'
import twitterGrayIcon from 'src/assets/images/twitter.svg'
import githubGrayIcon from 'src/assets/images/github-gray.svg'
import linkedinGrayIcon from 'src/assets/images/linkedin-gray.svg'
import facebookWhiteIcon from 'src/assets/images/facebook-white.svg'
import instagramWhiteIcon from 'src/assets/images/instagram-white.svg'
import twitterWhiteIcon from 'src/assets/images/twitter-white.svg'
import githubWhiteIcon from 'src/assets/images/github-white.svg'
import linkedinWhiteIcon from 'src/assets/images/linkedin-white.svg'

const SocialIconWrapper = styled(InlineBlock)`
  & > a > div {
    height: 20px;
    width: 20px;
    background-image: url(${(props) => (props.icon)});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  & > a:hover > div {
    background-image: url(${(props) => (props.hoverIcon)});
  }
`

const SocialIcon = ({ to, icon, hoverIcon }) => (
  <SocialIconWrapper
    icon={icon}
    hoverIcon={hoverIcon}
    mr={[0,0,24]}
  >
    <NavLink to={to} crossDomain>
      <InlineBlock />
    </NavLink>
  </SocialIconWrapper>
)

// Renders the subscribe column
const Subscribe = () => (
  <Column
    width={[1, 1, 2.5/4, 3/4, 0.35]}
    order={['1', '1', '1', '1', '2']}
    pl={[0, 0, 0, 0, 3]}
  >
    <Box mb={[32, 32, 32, 32, 41]}>
      <P color='white' align={['center', 'center', 'left']} lineHeight={1.63} mb={0} mt={[0, 0, 0, 0, '12px']}>
      Join our monthly newsletter to get the latest Serverless news, updates and happenings.
      </P>
    </Box>
    <NewsLetterForm emailFieldProps={{ placeholder: 'email address' }} />
    <Flex pt={[62, 62, 42, 42, 100]} pb={[62, 62, 82, 82, 0]} justifyContent={['space-between', 'space-between', 'normal']}>
      <SocialIcon
        to={facebookHandle}
        icon={facebookGrayIcon}
        hoverIcon={facebookWhiteIcon}
      />
      <SocialIcon
        to={instagramHandle}
        icon={instagramGrayIcon}
        hoverIcon={instagramWhiteIcon}
      />
      <SocialIcon
        to={twitterHandle}
        icon={twitterGrayIcon}
        hoverIcon={twitterWhiteIcon}
      />
      <SocialIcon
        to={githubHandle}
        icon={githubGrayIcon}
        hoverIcon={githubWhiteIcon}
      />
      <SocialIcon
        to={linkedinHandle}
        icon={linkedinGrayIcon}
        hoverIcon={linkedinWhiteIcon}
      />
    </Flex>
  </Column>
)

export default Subscribe
