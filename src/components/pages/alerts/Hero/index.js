import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import Image from './Image'
import { HeroWrapper } from 'src/fragments'

const AlertsHero = props => (
  <HeroWrapper customPb={[62, 62, 62, 62, 92, 139]}>
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

export default AlertsHero
