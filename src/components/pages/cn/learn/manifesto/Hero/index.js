import React from 'react'

import { Flex } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import Description from './Description'
import HeroTabs from '../../HeroTabs'

const DashboardHero = () => (
  <HeroWrapper
    height={[220, 220, 335, 365, 345]}
  >
    <HeroTabs selected='what' />
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent='space-between'
      mb={[2, 2, 4, 6]}
      width={1}
    >
      <Description />
    </Flex>
  </HeroWrapper>
)

export default DashboardHero
