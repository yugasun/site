import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'

const PoliciesHero = props => (
  <Flex
    pt={[48, 48, 48, 48, 126]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'column', 'column', 'row']}
  >
    <Content />
    <Flex mt={[0, 0, 0, 0, 54]} justifyContent={['center']}>
      <Image />
    </Flex>
  </Flex>
)

export default PoliciesHero
