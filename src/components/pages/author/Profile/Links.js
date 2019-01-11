import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Row,
  Column,
  Image,
  Text
} from 'serverless-design-system'
import {
  getLinkName,
  getGithubLink,
  getTwitterLink,
  getMediumLink,
} from 'src/utils/links'
import { ExternalLink } from 'src/fragments'
import linkIcon from 'src/assets/images/link.svg'
import twitterIcon from 'src/assets/images/twitter-black.svg'
import githubIcon from 'src/assets/images/github.svg'
import mediumIcon from 'src/assets/images/medium.svg'

const LinkText = styled(Text.p)`
  color: black;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`

const renderLink = (image, link) => (
  <ExternalLink to={link}>
    <Row alignItems='center'>
      <Column mr={1}>
        <Image
          src={image}
          width={20}
          maxHeight={20}
        />
      </Column>
      <LinkText fontSize={1}>
        { getLinkName(link) }
      </LinkText>
    </Row>
  </ExternalLink>
)

const BlogAuthorLinks = ({ personalWebsite, githubHandle, twitterHandle, mediumHandle }) => (
  <Box width={[1, 1, 1, 1, 1, 280]}>
    { personalWebsite && renderLink(linkIcon, personalWebsite) }
    { githubHandle && renderLink(githubIcon, getGithubLink(githubHandle)) }
    { twitterHandle && renderLink(twitterIcon, getTwitterLink(twitterHandle)) }
    { mediumHandle && renderLink(mediumIcon, getMediumLink(mediumHandle)) }
  </Box>
)

export default BlogAuthorLinks

