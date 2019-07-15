import React from 'react'
import { Box, Flex, Text, Background } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

const index = props => (
  <Box m={0}>
    <Heading.h3 align='center'>Pricing that grows with you</Heading.h3>
    <Flex>
      <Background background='white' width={384} height={496}>
        <Flex flexDirection='column' py={62} px={32}>
          <Heading.h3 align='center'>Free</Heading.h3>
          <Flex justifyContent='space-around'>
            <Text>Transactions</Text>
            <Text>$0/1m/month</Text>
            <Text>yes</Text>
          </Flex>
          <Flex justifyContent='space-around'>
            <Text>Installation</Text>
            <Text>SaaS</Text>
            <Text>yes</Text>
          </Flex>
        </Flex>
      </Background>
    </Flex>
  </Box>
)

export default index
