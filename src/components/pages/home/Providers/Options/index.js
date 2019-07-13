import React from 'react'
import { Flex, Column, Text } from 'serverless-design-system'
import Terminal from './Terminal'

const providers = [
  'AWS',
  'Google Cloud Platform',
  'Azure',
  'OpenWhisk',
  'Kubeless',
  'Cloudflare',
]

const Options = () => (
  <Flex>
    <Column ml={104} mr={136}>
      {providers.map(provider => (
        <Text
          key={provider}
          color='#8c8c8c'
          fontSize={'18px'}
          lineHeight={'30px'}
          letterSpacing={'-0.28px'}
          fontFamily='SoleilBk'
          mt={'10px'}
        >
          {provider}
        </Text>
      ))}
    </Column>
    <Terminal />
  </Flex>
)

export default Options
