import React from 'react'

import Logo from './Logo'
import HeroHeader from './Header'
import HeroFeature from './Feature'
import HeroActions from './Actions'
import HeroBrands from './Brands'
import { Flex, Column } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <React.Fragment>
    <Column alignItems='center'>
      <Logo />
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
