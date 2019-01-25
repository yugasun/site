import React from 'react'
import { Flex, Text, Column, Box } from 'serverless-design-system'
import { Heading, Button } from 'src/fragments/DesignSystem'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import ReactPlayer from 'react-player'

const FeaturesData = [
  {
    title: '1. Onboarding enablement and control with Serverless Secrets',
    description:
      'Our enterprise dashboard gives you control over developer access to your serverless application environments. Collaboration features like secure secrets let new team members start contributing immediately without needing to set up or maintain cloud credentials.',
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
      'A central dashboard provides easy access to check application health.<br/>We’ll provide proactive tips so you can make your applications as efficient as possible: real-time cost and performance analysis, actionable operations events and more.',
    videoUrl:
      'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-insights.mp4',
  },
]

const Features = () => (
  <Box>
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
          pt={[92, 92, 162]}
        >
          <Column width={['auto', 'auto', '30%']}>
            <TitleWithIcon color='white' headingComponent={Heading.h4}>
              {feature.title}
            </TitleWithIcon>
            <Text.p fontFamily='SoleilBk' lineHeight='26px' color='gray.3'>
              {feature.description}
            </Text.p>
            <Button width={208} mt={4}>
              schedule a demo
            </Button>
          </Column>
          <Flex
            alignItems='center'
            justifyContent='center'
            p={'32px'}
            ml={[0, 0, isEvenItem ? '17%' : 0]}
            mr={[0, 0, isEvenItem ? 0 : '14%']}
            mt={[0, 0, 0]}
            mb={[4, 4, 0]}
          >
            <ReactPlayer
              url={feature.videoUrl}
              playing={true}
              loop={true}
              width={'552px'}
              muted={true}
            />
          </Flex>
        </Flex>
      )
    })}
  </Box>
)

export default Features
