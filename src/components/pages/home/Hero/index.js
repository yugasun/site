import React from 'react'

import HeroHeader from './Header'
import HeroFeature from './Feature'
import HeroActions from './Actions'
import HeroBrands from './Brands'
import { Flex, Column } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <React.Fragment>
    <Column alignItems='center'>
      <HeroHeader />
      <HeroActions />
    </Column>
    <Flex>
      <HeroFeature />
    </Flex>
    <HeroBrands />
  </React.Fragment>
)

export default HomeHeroComponent
