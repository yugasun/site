import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'
import facebookIcon from 'src/assets/images/pages/courses/share/facebook-white.svg'
import twitterIcon from 'src/assets/images/pages/courses/share/twitter-white.svg'
import linkedinIcon from 'src/assets/images/pages/courses/share/linkedin-white.svg'
import slackIcon from 'src/assets/images/pages/courses/share/slack-white.svg'

const Share = props => (
  <Flex style={{ borderTop: '1px solid #9b9b9b;' }} alignItems='center'>
    <P mr={42} color='#8c8c8c'>
      Share
    </P>
    <ExternalLink
      to={
        'https://www.facebook.com/sharer/sharer.php?u=http://serverless.com/learn/full-stack-application-development-on-aws/'
      }
    >
      <Flex mr={22}>
        <Image src={facebookIcon} />
      </Flex>
    </ExternalLink>
    <ExternalLink
      to={
        'https://twitter.com/home?status=http://serverless.com/learn/full-stack-application-development-on-aws/ '
      }
    >
      <Flex mr={22}>
        <Image src={twitterIcon} />
      </Flex>
    </ExternalLink>
    <ExternalLink
      to={
        'https://www.linkedin.com/shareArticle?mini=true&url=http://serverless.com/learn/full-stack-application-development-on-aws/&title=&summary=&source='
      }
    >
      <Flex mr={22}>
        <Image src={linkedinIcon} />
      </Flex>
    </ExternalLink>
    <ExternalLink to={'https://facebook.com'}>
      <Flex mr={22}>
        <Image src={slackIcon} />
      </Flex>
    </ExternalLink>
  </Flex>
)

export default Share
