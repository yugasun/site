import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'
import { HeroWrapperNewest as HeroWrapper } from 'src/fragments'

const IntegrationsHero = props => (
  <HeroWrapper>
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

export default IntegrationsHero
