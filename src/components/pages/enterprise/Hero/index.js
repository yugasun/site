import React from 'react'

import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import Header from './Header'
import Actions from './Actions'
import Benefit from './Benefit'
import Points from './Points'
import background from 'src/assets/images/pages/enterprise/hero-background.svg'
import backgroundAnimated from 'src/assets/images/pages/enterprise/hero-background-animated.svg'
import { isSafari, isMobile } from 'react-device-detect'
import Form from 'src/components/pages/enterprise/Form'

const FrameworkHero = () => (
  <HeroWrapper
    background={
      isSafari && !isMobile
        ? `black url(${background})`
        : `black url(${backgroundAnimated})`
    }
    backgroundSize={['contain', 'contain', 'cover']}
    backgroundPosition={['top', 'top', 'center']}
    height={[450, 450, 660, 780, 1340, 1450]}
    backgroundRepeat='no-repeat'
  >
    <Header />
    <Actions />
    <Benefit />
    <Form />
  </HeroWrapper>
)

export default FrameworkHero
