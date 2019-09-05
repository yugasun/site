import React from 'react'
import styled from 'styled-components'
import {
  Absolute,
  Background,
  Card,
  Column,
  Box,
  Image,
  Row,
  InlineBlock,
  HorizontalRule,
  ResponsiveStack,
  Overflow,
} from 'serverless-design-system'
import { AppContainer } from 'src/components'
import checkmarkIcon from 'src/assets/images/ok-icon.png'
import benefitsBackground from 'src/assets/images/benefits-dots-background.png'
import { P, Heading } from 'src/fragments/DesignSystem'

const RelativeCard = styled(Card)`
  position: relative;
`

const benefitList = [
  'Quality healthcare, dental, and vision plans',
  '401(k) Retirement savings account',
  'Unlimited paid time off policy',
  'SF commuter program',
  'Team Retreats',
]

const HowWeOperate = () => (
  <Overflow ox='hidden'>
    <Column pt={[3, 3, 3, 5, 8]} pb={[3, 3, 3, 5]}>
      <AppContainer>
        <Heading.h2>How We Operate</Heading.h2>

        <ResponsiveStack>
          <Box width={[1, 1, 0.55]}>
            <P mt={0}>
              We are a group of self-motivated hackers and creatives who believe
              that there is a better way to build cloud applications. Our end
              goal is to make software development accessible to everyone, and
              we are starting by making it easier for software engineers. Our
              open source Serverless Framework is a massively popular open
              source project, and the go-to way developers deploy modern cloud
              applications.
            </P>
            <P>
              At Serverless, we strongly believe in the power of community. We
              believe in open source. We believe that the serverless movement is
              only just beginning, and will soon occupy the majority of the
              public cloud market. And we want to be the people who take it
              there.
            </P>
            <P>
              We are creating the environment developers will use to build,
              operate and integrate their applications at scale. To do this
              requires true forward-thinking. It requires a team that values
              openness, and that can be honest (yet compassionate) in their
              ideas and critiques. If you are one such person, we don’t care
              where you are located; we want to work with you.
            </P>
            <P>
              We are Serverless, Inc, and our mission is to enable developers to
              build more and manage less. We hope you’ll join us.
            </P>
          </Box>

          <Column width={[1, 1, 0.6]} alignItems='flex-end' mt={[3, 3, 1, 0]}>
            <RelativeCard
              width={[1, 1, 9 / 10, 9 / 10, 8 / 10]}
              boxShadow='2px 2px 8px 0 #eaeaea'
              border='1px solid #eaeaea'
              px={[2, 2, 4]}
              py={3}
              bg='white'
            >
              <Absolute
                height='fullHeight'
                width='100vw'
                top={['-30px', '-30px', '-40px', '-50px']}
                zIndex={-1}
              >
                <Background
                  background={`url(${benefitsBackground})`}
                  backgroundSize='contain'
                  height='fullHeight'
                  width={1}
                />
              </Absolute>
              <Heading.h5>Our Benefits</Heading.h5>
              <HorizontalRule height='2px' color='#dfe5e6' />

              {benefitList.map((benefit, index) => (
                <Row mt={3} alignItems='center' key={index}>
                  <InlineBlock mr={2}>
                    <Image src={checkmarkIcon} height='40px' width='40px' />
                  </InlineBlock>
                  <P my={0}>{benefit}</P>
                </Row>
              ))}
            </RelativeCard>
          </Column>
        </ResponsiveStack>
      </AppContainer>
    </Column>
  </Overflow>
)

export default HowWeOperate
