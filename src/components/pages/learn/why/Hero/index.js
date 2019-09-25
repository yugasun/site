import React from 'react'

import { Flex } from 'serverless-design-system'
import { HeroWrapperWithTabs as HeroWrapper } from 'src/fragments'
import Description from './Description'
import Actions from './Actions'
import HeroTabs from '../../HeroTabs'

const DashboardHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[410, 410, 600, 594, 509, 449]}
  >
    <HeroTabs selected='why' />
    <Flex
      flexDirection={['column', 'column', 'row']}
      justifyContent='space-between'
      mb={[2, 2, 4, 6]}
      width={1}
    >
      <Description />
      <Actions />
    </Flex>
  </HeroWrapper>
)

export default DashboardHero
