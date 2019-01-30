import React from 'react'
import { Flex, Text, Column, Box, Background } from 'serverless-design-system'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import ReactPlayer from 'react-player'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Headline from './Headline'

const FlexWithBackground = styled(Flex)`
  background-image: radial-gradient(circle at 50% 50%, #481f1d 5%, #000 75%);
  perspective: 1000px;
`
const HoverableReactPlayer = styled(ReactPlayer)`
  @media screen and (min-width: 1280px) {
    transition: all 1s;
    transform: ${props =>
      props.index === 1
        ? 'rotateY(12deg) scale(1.2)'
        : 'rotateY(-12deg) scale(1.2)'};
    &:hover {
      transform: ${props =>
        props.index === 1
          ? 'rotateY(25deg) scale(1.4)'
          : 'rotateY(-25deg) scale(1.4)'};
    }
  }
`

const FeaturesData = [
  {
    title: '1. Onboarding enablement and control with Serverless Secrets',
    description:
      'Get control over developer access to your serverless application environments with the serverless dashboard. Collaboration features like secure secrets let new team members start contributing immediately, without needing to set up or maintain cloud credentials.',
    videoUrl:
      'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-secrets.mp4',
  },
  {
    title: '2. Ship fast, safely with Serverless Safeguards',
    description:
      'Safely manage deployments with security policies and enforce operational best practices across your team with serverless safeguards.',
    videoUrl:
      'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-safeguards.mp4',
  },
  {
    title: '3. Monitor application health with Serverless Insights',
    description:
      'A central dashboard provides easy access to check application health. We’ll provide proactive tips so you can make your applications as efficient as possible: real-time cost and performance analysis, actionable operations events and more.',
    videoUrl:
      'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-insights.mp4',
  },
]

const Features = () => (
  <Box pt={[500, 500, 420, 420, 240, 180]}>
    <Headline />
    {FeaturesData.map((feature, index) => {
      const isEvenItem = index % 2 == 0
      return (
        <Flex
          flexDirection={[
            'column-reverse',
            'column-reverse',
            isEvenItem ? 'row' : 'row-reverse',
          ]}
          key={index}
          pt={[52, 52, 0, 0, 32]}
        >
          <Column
            width={['auto', 'auto', '70%', '70%', '30%']}
            mt={[0, 0, 100, 100, 176]}
          >
            <TitleWithIcon
              color='white'
              headingComponent={Heading.h4}
              fontSize={[24]}
              letterSpacing={['-0.38px']}
              lineHeight={['38px']}
              align='left'
              customIconHeight={['38px', '38px', '38px', '38px', '38px']}
              customIconWidth={['65px', '65px', '60px', '88px']}
            >
              {feature.title}
            </TitleWithIcon>
            <Text.p fontFamily='SoleilBk' lineHeight='26px' color='white'>
              {feature.description}
            </Text.p>
            <a href='#enterprise-contact-form'>
              <Button width={208} mt={4}>
                schedule a demo
              </Button>
            </a>
          </Column>
          <FlexWithBackground
            alignItems='center'
            justifyContent='center'
            p={[0, 0, '32px']}
            ml={[0, 0, 0, 0, isEvenItem ? '17%' : 0]}
            mr={[0, 0, 0, 0, isEvenItem ? 0 : '14%']}
            mt={[0, 0, 8, 8, 0]}
            height={[300, 300, 336, 336, 696]}
          >
            <MediaQuery minWidth={1600}>
              <HoverableReactPlayer
                url={feature.videoUrl}
                playing={true}
                loop={true}
                width={'552px'}
                muted={true}
                style={{ border: '1px #363636 solid' }}
                height='300px'
                index={index}
              />
            </MediaQuery>
            <MediaQuery minWidth={1024} maxWidth={1600}>
              <HoverableReactPlayer
                url={feature.videoUrl}
                playing={true}
                loop={true}
                width={'552px'}
                height='300px'
                muted={true}
                style={{ border: '1px #363636 solid' }}
                index={index}
              />
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1023}>
              <ReactPlayer
                url={feature.videoUrl}
                controls={true}
                width={'336px'}
                height={'179px'}
                muted={true}
              />
            </MediaQuery>
            <MediaQuery maxWidth={767}>
              <ReactPlayer
                url={feature.videoUrl}
                controls={true}
                width={'300px'}
                height={'160px'}
                muted={true}
              />
            </MediaQuery>
          </FlexWithBackground>
        </Flex>
      )
    })}
  </Box>
)

export default Features
