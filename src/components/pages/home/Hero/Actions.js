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
    buttonWidth={['300px', '300px', '176px']}
    flexDirection={['column', 'column', 'row']}
    justifyContent={['center', 'center', 'left']}
    tabletRow={true}
  />
)

export default HomeActions
