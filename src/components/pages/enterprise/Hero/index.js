import React from 'react'

import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import Header from './Header'
import Actions from './Actions'
import Benefit from './Benefit'
import background from 'src/assets/images/pages/enterprise/hero-background.svg'

const FrameworkHero = () => (
  <HeroWrapper
    background={`black url(${background})`}
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
