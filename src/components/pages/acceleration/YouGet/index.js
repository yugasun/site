import React from 'react'
import { Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import Workshop from './Workshop'
import Support from './Support'
import Enterprise from './Enterprise'

const YouGet = () => (
  <Flex alignItems='center' flexDirection='column'>
    <P>What you get</P>
    <P>
      All the training, support, and tooling you need to take Serverless in to
      production.
    </P>
    <Workshop />
    <Flex>
      <Support />
      <Enterprise />
    </Flex>
  </Flex>
)

export default YouGet
