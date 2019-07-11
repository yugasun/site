import React from 'react'

import HeroWrapper from './Wrapper'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroBrands from './Brands'
import { Flex, Box, Column } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <HeroWrapper height={[1150, 1094, 1094, 841, 1009]}>
    <Column>
      <HeroHeader />
      <HeroActions />
    </Column>
    <Flex>
      <HeroImage />
    </Flex>
    <HeroBrands />
  </HeroWrapper>
)

export default HomeHeroComponent
