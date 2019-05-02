import React from 'react'

import HeroWrapper from './Wrapper'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroPlatforms from './Platforms'
import { Flex, Box } from 'serverless-design-system'

const HomeHeroComponent = ({ usingSafariDesktop }) => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)',
      `linear-gradient(155deg,rgb(0,0,0) 50%,#70221f)`,
    ]}
    height={[1300, 1250, 877, 841, 1126, 1126]}
  >
    <Flex
      justifyContent={['start', 'start', 'space-around']}
      flexDirection={['column', 'column', 'row']}
    >
      <HeroImage usingSafariDesktop={usingSafariDesktop} />
      <Box width={['auto', 'auto', '300px', '70%', '60%', '696px']}>
        <HeroHeader />
        <Box mt={[0, 0, 50]}>
          <HeroActions />
        </Box>
      </Box>
    </Flex>
    <HeroPlatforms />
  </HeroWrapper>
)

export default HomeHeroComponent
