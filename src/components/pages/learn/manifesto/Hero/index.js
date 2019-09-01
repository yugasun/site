import React from 'react'

import { Box, Flex } from 'serverless-design-system'
import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import Description from './Description'
import HeroTabs from '../../HeroTabs'

const DashboardHero = () => (
  <HeroWrapper
    background={[
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
      `linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`,
    ]}
    height={[260, 260, 415, 450, 480, 480]}
  >
    <Box mb={[2, 2, 6]} pt={[0, 0, 4]}>
      <HeroTabs selected='what' />
    </Box>
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
