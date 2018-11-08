import React from 'react'

import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroGithub from './Github'
import HeroPlatforms from './Platforms'
import { Flex, Box } from 'serverless-design-system'

const HomeHeroComponent = ({usingSafariDesktop}) => (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)',`linear-gradient(155deg,rgb(0,0,0) 50%,#70221f)`]}
    height={[1500, 1500, 1570]}
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
    <HeroImage usingSafariDesktop={usingSafariDesktop}/>
</Flex>
  <HeroPlatforms />
  </HeroWrapper>
)

export default HomeHeroComponent