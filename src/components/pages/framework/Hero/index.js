import React from 'react'

import HeroWrapper from './Wrapper'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import { Flex, Box } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <HeroWrapper height={[1150, 1094, 1094, 841, 1009]}>
    <Flex
      justifyContent={['start', 'start', 'space-around']}
      flexDirection={['column-reverse', 'column-reverse', 'row']}
    >
      <HeroImage />
      <Box
        width={['auto', 'auto', '37%', '40%', '55%', '488px']}
        ml={[0, 0, 0, 14, 4, 0]}
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
