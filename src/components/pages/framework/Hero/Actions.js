import React from 'react'
import { HeroActionsNew as HeroActions } from 'src/fragments'

const FrameworkHeroActions = () => (
  <HeroActions
    firstBtn={{
      name: 'quick start',
      to: '/framework/docs/getting-started/',
      completed: true,
    }}
    secondBtn={{
      name: 'enterprise',
      to: '/enterprise/',
      completed: true,
    }}
    flexDirection={['column', 'column', 'row']}
    justifyContent="center"
  />
)

export default FrameworkHeroActions
