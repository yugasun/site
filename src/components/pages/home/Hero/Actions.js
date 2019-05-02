import React from 'react'
import { HeroActionsNew as HeroActions } from 'src/fragments'

const HomeActions = () => (
  <HeroActions
    firstBtn={{
      name: 'use open source',
      to: '/framework/docs/getting-started/',
      completed: true,
      className: 'position-hero',
    }}
    secondBtn={{
      name: 'try enterprise',
      to: '/enterprise/',
      completed: true,
      className: 'position-hero',
    }}
    flexDirection={['column', 'column', 'column', 'column', 'row', 'row']}
    justifyContent={['center', 'center', 'left']}
  />
)

export default HomeActions
