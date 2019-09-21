import React from 'react'
import { HeroActionsNewest as HeroActions } from 'src/fragments'
import { gettingStarted } from 'src/constants/urls'

const HomeActions = () => (
  <HeroActions
    firstBtn={{
      name: 'begin',
      dashboardLink: true,
      className: 'position-hero',
    }}
    secondBtn={{
      name: 'docs',
      to: gettingStarted,
      completed: true,
      className: 'position-hero',
    }}
    buttonWidth={['300px', '325px', '152px', '152px', '176px']}
    flexDirection={['column', 'column', 'row']}
    justifyContent={['center', 'center', 'left']}
    tabletRow={true}
  />
)

export default HomeActions
