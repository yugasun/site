import React from 'react'

import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroGithub from './Github'
import HeroPlatforms from './Platforms'
import HeroIncline from './Incline'
import { Flex, Box } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)',`linear-gradient(155deg,rgb(0,0,0) 50%,#70221f)`]}
    height={[1468]}
  >
  <Flex
    justifyContent={['start', 'start', 'space-around']}
    flexDirection={['column', 'column', 'row']}
  >
    <Box>
      <HeroHeader />
      <HeroActions />
      <HeroGithub />
    </Box>
    <HeroImage />
</Flex>
  <HeroPlatforms />
  <HeroIncline />
  </HeroWrapper>
)

export default HomeHeroComponent