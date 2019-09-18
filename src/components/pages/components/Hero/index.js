import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'
import { HeroWrapperNewest as HeroWrapper } from 'src/fragments'

const ComponentsHero = props => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
  >
    <Flex flexDirection={['column', 'column', 'column', 'column', 'row']}>
      <Content />
      <Image />
    </Flex>
  </HeroWrapper>
)

export default ComponentsHero
