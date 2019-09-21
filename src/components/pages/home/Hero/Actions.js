import React from 'react'
import { HeroActionsNewest as HeroActions } from 'src/fragments'
import { framework } from 'src/constants/urls'

const HomeActions = () => (
  <HeroActions
    firstBtn={{
      name: 'get started free',
      className: 'position-hero',
      dashboardLink: true,
    }}
    secondBtn={{
      name: 'learn more',
      to: framework,
      completed: true,
      className: 'position-hero',
    }}
    buttonWidth={['300px', '300px', '176px']}
    flexDirection={['column', 'column', 'row']}
    justifyContent={['center', 'center', 'center']}
    tabletRow={true}
    buttonMarginY={'5px'}
  />
)

export default HomeActions
