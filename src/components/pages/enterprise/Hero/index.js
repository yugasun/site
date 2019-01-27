import React from 'react'

import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import Header from './Header'
import Actions from './Actions'
import Benefit from './Benefit'
import background from 'src/assets/images/pages/enterprise/hero-background.svg'
import backgroundAnimated from 'src/assets/images/pages/enterprise/hero-background-animated.svg'
import { isSafari, isMobile } from 'react-device-detect'

const FrameworkHero = () => (
  <HeroWrapper
    background={
      isSafari && !isMobile
        ? `black url(${background})`
        : `black url(${backgroundAnimated})`
    }
    backgroundSize='cover'
    backgroundPosition='center'
    height={[600, 600, 542, 542, 959]}
  >
    <Header />
    <Actions />
    <Benefit />
  </HeroWrapper>
)

export default FrameworkHero
