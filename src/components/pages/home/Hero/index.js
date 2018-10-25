import React from 'react'

import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import HeroHeader from './Header'
import HeroImage from './Image'
import HeroActions from './Actions'
import HeroGithub from './Github'
import HeroPlatforms from './Platforms'
import { Flex, Box, Absolute, Image, Card } from 'serverless-design-system'
import upArrowGroup from 'src/assets/images/up-arrow-group-red.svg'

const HomeHeroComponent = () => (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',`linear-gradient(132deg,rgb(0,0,0) 70%,#70221f)`]}
    height={[1468]}
  >
  <Flex
    justifyContent={['start', 'start', 'space-around']}
    flexDirection={['column', 'column', 'row']}
    ml={[0, 0, '7px']}
  >
<Box>
<Absolute
  display={['none', 'none', 'block']}
  left='0'
  ml={108}
  mt={220}
  >
    <Image
      src={upArrowGroup}
    >
    </Image>
  </Absolute>
<HeroHeader />
<HeroActions />
<HeroGithub />
</Box>
<HeroImage />
</Flex>
<HeroPlatforms />
<Absolute
  height='0'
  left='0'
>
<Card
borderRight='100vw solid transparent'
borderBottom='200px solid white'
/>
</Absolute>
  </HeroWrapper>
)

export default HomeHeroComponent