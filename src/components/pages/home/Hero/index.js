import React from 'react'

import HeroWrapper from './Wrapper'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroBrands from './Brands'
import { Flex, Box, Column } from 'serverless-design-system'

const HomeHeroComponent = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)',
      `linear-gradient(155deg,rgb(0,0,0) 50%,#70221f)`,
    ]}
    height={[1150, 1094, 1094, 841, 1009]}
  >
    <Flex
      justifyContent={['start', 'start', 'space-around']}
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
      ]}
    >
      <HeroImage />
      <Box width={['auto', 'auto', '90%', '70%', '55%', '696px']}>
        <HeroHeader />
        <Box>
          <HeroActions />
        </Box>
        <HeroBrands />
      </Box>
    </Flex>
  </HeroWrapper>
)

export default HomeHeroComponent
