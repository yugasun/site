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
    backgroundSize={['contain', 'contain', 'cover']}
    backgroundPosition={['top', 'top', 'center']}
    height={[600, 600, 485, 485, 959]}
    backgroundRepeat='no-repeat'
  >
    <Header />
    <Actions />
    <Benefit />
  </HeroWrapper>
)

export default FrameworkHero
