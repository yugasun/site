import React from 'react'

import HeroWrapper from './Wrapper'
import HeroHeader from './Header'
import HeroImage from './Image'
import { Flex, Box } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <HeroWrapper background='black' style={{ zIndex: '-5' }}>
    <Flex
      justifyContent={['start', 'start', 'space-around']}
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <HeroImage />
      <Box
        width={['auto', 'auto', '47%', '47%', '55%', '488px']}
        ml={[0, 0, 0, 0, 130, 98]}
      >
        <HeroHeader />
      </Box>
    </Flex>
  </HeroWrapper>
)

export default HomeHeroComponent
