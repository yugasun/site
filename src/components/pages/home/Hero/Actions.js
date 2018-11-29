import React from 'react'

import { HeroActionsNew as HeroActions } from 'src/fragments'

const HomeActions = () => (
  <HeroActions
    firstBtn={{
      name: 'install framework',
      to: '/framework/docs/getting-started/',
      completed: true,
    }}
    secondBtn={{
      name: 'demo platform',
      to: '/platform/',
      completed: true,
    }}
    flexDirection={['column', 'column', 'column', 'column', 'row']}
    justifyContent='center'
  />
)

export default HomeActions