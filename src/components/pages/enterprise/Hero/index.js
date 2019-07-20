import React from 'react'

import HeroWrapper from './Wrapper'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import { Flex, Box } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <HeroWrapper height={[1150, 900, 590, 590, 760, 760]} background='black'>
    <Flex
      justifyContent={['start', 'start', 'space-around']}
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <HeroImage />
      <Box
        width={['auto', 'auto', '40%', '40%', '55%', '488px']}
        ml={[0, 0, 0, 0, 130, 98]}
      >
        <HeroHeader />
        <Box>
          <HeroActions />
        </Box>
      </Box>
    </Flex>
  </HeroWrapper>
)

export default HomeHeroComponent
