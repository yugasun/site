import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'
import { HeroWrapper } from 'src/fragments'

const PoliciesHero = props => (
  <HeroWrapper bottomMarginBg='white'>
    <Flex
      justifyContent='space-between'
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      alignItems={'center'}
    >
      <Content />
      <Image />
    </Flex>
  </HeroWrapper>
)

export default PoliciesHero
