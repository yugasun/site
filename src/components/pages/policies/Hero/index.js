import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'
import { HeroWrapperNewest as HeroWrapper } from 'src/fragments'

const PoliciesHero = props => (
  <HeroWrapper>
    <Flex
      justifyContent={['space-between']}
      alignItems='center'
      flexDirection={['column', 'column', 'column', 'column', 'row']}
    >
      <Content />
      <Image />
    </Flex>
  </HeroWrapper>
)

export default PoliciesHero
