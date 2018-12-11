import React from 'react'

import { HeroWrapperNew as HeroWrapper } from 'src/fragments'
import Header from './Header'
import HeroImage from './HeroImage'
import Actions from './Actions'
import Advantage from './Advantage'
import CloudProviders from './CloudProviders'

const FrameworkHero = () => (
  <HeroWrapper
    background={['linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)', 'linear-gradient(150deg,rgb(0,0,0) 40%,#70221f)',`linear-gradient(155deg,rgb(0,0,0) 60%,#70221f)`]}
  >
    <Header />
    <HeroImage />
    <Advantage />
    <Actions />
    <CloudProviders />
  </HeroWrapper>
)

export default FrameworkHero