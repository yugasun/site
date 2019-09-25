import React from 'react'
import {
  twitterHandle,
  githubHandle,
  linkedinHandle,
} from 'src/constants/urls'
import twitterGrayIcon from 'src/assets/images/twitter.svg'
import githubGrayIcon from 'src/assets/images/github-gray.svg'
import linkedinGrayIcon from 'src/assets/images/linkedin-gray.svg'
//TODO: removed unused image files from source
import { NavLink } from 'src/components'
import styled from 'styled-components'
import { InlineBlock, Flex } from 'serverless-design-system'

const SocialIconWrapper = styled(InlineBlock)`
  & > a > div {
    height: 20px;
    width: 20px;
    background-image: url(${props => props.icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  & > a:hover > div {
    opacity: 0.6;
  }
`
const SocialIcon = ({ to, icon }) => (
  <SocialIconWrapper icon={icon} mr={[24]}>
    <NavLink to={to} crossDomain>
      <InlineBlock />
    </NavLink>
  </SocialIconWrapper>
)

const SocialIcons = props => (
  <Flex>
    <SocialIcon to={twitterHandle} icon={twitterGrayIcon} />
    <SocialIcon to={githubHandle} icon={githubGrayIcon} />
    <SocialIcon to={linkedinHandle} icon={linkedinGrayIcon} />
  </Flex>
)

export default SocialIcons
