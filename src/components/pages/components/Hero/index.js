import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'

const PoliciesHero = props => (
  <Flex
    pt={[52, 52, 52, 52, 68]}
    flexDirection={['column', 'column', 'column', 'column', 'row']}
  >
    <Content />
    <Image />
  </Flex>
)

export default PoliciesHero
