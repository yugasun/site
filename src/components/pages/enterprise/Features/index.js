import React from 'react'
import { Flex, Text, Column, Box } from 'serverless-design-system'
import { Heading, Button, P } from 'src/fragments/DesignSystem'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import ReactPlayer from 'react-player'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import Headline from './Headline'

const ButtonWithZindex = styled('a')`
  z-index: 4;
`

const FlexWithBackground = styled(Flex)`
  background-image: radial-gradient(circle at 50% 50%, #481f1d 5%, #000 75%);
  perspective: 1000px;

  @media screen and (min-width: 450px) and (max-width: 768px) {
    background-image: radial-gradient(circle at 51% 50%, #481f1d 5%, #000 65%);
  }

  @media screen and (min-width: 768px) and (max-width: 1025px) {
    background-image: radial-gradient(circle at 51% 50%, #481f1d 5%, #000 52%);
  }

  @media screen and (max-width: 415px) {
    background-image: radial-gradient(circle at 51% 50%, #481f1d 5%, #000 65%);
  }
`
const HoverableReactPlayer = styled(ReactPlayer)`
  @media screen and (min-width: 1280px) {
    transition: all 1s;
    transform: ${props =>
      props.index === 1
        ? 'rotateY(9deg) scale(1.4)'
        : 'rotateY(-9deg) scale(1.4)'};
  }
`

const FeaturesData = [
  {
    title: '1. Simplify security',
    description:
      'With Serverless Secrets, you can easily manage and delegate access to sensitive information your serverless applications require (e.g. access keys). You can create secrets within the Enterprise console and reference them via the Serverless Framework’s variable system. \n You can also create a special type of secret that gives your developers and CI/CD systems temporary access to deploy to your cloud accounts.',
    videoUrl:
      'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-secrets.mp4',
  },
  {
    title: '2. Inject best practices',
    description:
      'Serverless Framework Enterprise includes its own policy engine called Serverless Safeguards, which comes pre-configured with policies to enforce development, operational and security best practices like, restricted-deploy-times, required-stack-tags, and no-wild-iam-role-statements. \n We will warn you if your application contains any well known architectural anti-patterns and help you fix the problem.',
    videoUrl:
      'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-safeguards.mp4',
  },
  {
    title: '3. Troubleshoot like a boss',
    description:
      'Serverless Framework Enterprise includes a complete monitoring and alerting feature-set called Serverless Insights. Automagically upon deployment, your Functions will be instrumented to generate performance information and alerts, like "Deployments", "Unusual Invocation Rates" and "New Error Detected". \n When a new error is detected in your code, we’ll tell you about it immediately, and we’ll even tell you where it is.',
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
            'column',
            'column',
            'column',
            'column',
            isEvenItem ? 'row' : 'row-reverse',
          ]}
          key={index}
          pt={[52, 52, 0, 0, 0]}
          mt={[0, 0, 0, 0, index !== 0 ? -70 : 0]}
        >
          <Column
            width={['auto', 'auto', '80%', '80%', '30%']}
            mt={[
              0,
              0,
              index == 0 ? 100 : '10px',
              index == 0 ? 100 : '10px',
              176,
            ]}
            pt={[0, 0, 0, 0, index == 1 ? 3 : 0]}
          >
            <Box width={[1, 1, 0.7, 1, 1]}>
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
            </Box>
            {feature.description.split('\n').map(function(item, key) {
              return (
                <span key={key}>
                  <P color='white' my={key === 0 ? 'auto' : 0}>
                    {item}
                  </P>
                  <br />
                </span>
              )
            })}

            <ButtonWithZindex href='#enterprise-contact-form'>
              <Button width={208} mt={4}>
                schedule a demo
              </Button>
            </ButtonWithZindex>
          </Column>
          <FlexWithBackground
            alignItems='center'
            justifyContent='center'
            p={[0, 0, '32px']}
            ml={[0, 0, 0, 0, isEvenItem ? '17%' : 0]}
            mr={[0, 0, 0, 0, isEvenItem ? 0 : '14%']}
            mt={[0, 0, -5, -5, 0]}
            height={[300, 300, 571, 571, 696]}
          >
            <MediaQuery minWidth={1280}>
              <HoverableReactPlayer
                url={feature.videoUrl}
                playing={true}
                loop={true}
                width={'450px'}
                muted={true}
                style={{
                  border: '1px #363636 solid',
                  transformStyle: 'preserve-3d',
                }}
                height='244px'
                index={index}
              />
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1023}>
              <ReactPlayer
                url={feature.videoUrl}
                playing={true}
                loop={true}
                width={'571px'}
                height={'571px'}
                muted={true}
              />
            </MediaQuery>
            <MediaQuery minWidth={1024} maxWidth={1279}>
              <ReactPlayer
                url={feature.videoUrl}
                playing={true}
                loop={true}
                width={'700px'}
                height={'700px'}
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
