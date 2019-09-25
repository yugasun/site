import React from 'react'
import { Flex, Box } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'

const paragraphs = [
  `Serverless is a movement. It’s a movement driven by developers and businesses who realize that software is eating the world, but you will be eaten too if you build & maintain all of it yourself. It’s a movement that demands that the most menial parts of building an application be abstracted away so that developers are free to actually spend their time delivering business value.`,
  `It’s a movement that is defined by empowering developers to single-handedly build apps that handle production level traffic. They don’t have to actively manage scaling their infrastructure. They don't have to provision servers, or pay for resources that go unused. They can just focus on building.`,
  `Ultimately, Serverless is about developers focusing their efforts on what provides value to their users (and not wasting time on anything else). Upgrading your Linux distro does not provide value to users. Managing your Kubernetes cluster does not provide value to users. Shipping product that solves problems provides value to users.`,
]

const WhatIsServerless = props => (
  <Flex mt={[62, 62, 62, 62, 92]} flexDirection={['column', 'column', 'row']}>
    <Box width={[1, 1, 0.45]}>
      <Heading.h3>What is Serverless?</Heading.h3>
    </Box>
    <Box width={[1, 1, 0.55]}>
      {paragraphs.map((paragraph, index) => (
        <P key={index} mt={0} mb={index == 2 ? 0 : 16}>
          {paragraph}
        </P>
      ))}
    </Box>
  </Flex>
)

export default WhatIsServerless
