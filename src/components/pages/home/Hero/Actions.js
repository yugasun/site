import React from 'react'
import { HeroActionsNew as HeroActions } from 'src/fragments'
import { framework, docs } from 'src/constants/newUrls'

const HomeActions = () => (
  <HeroActions
    firstBtn={{
      name: 'get started free',
      to: framework,
      completed: true,
      className: 'position-hero',
    }}
    secondBtn={{
      name: 'learn more',
      to: docs,
      completed: true,
      className: 'position-hero',
    }}
    buttonWidth={['300px', '300px', '176px']}
    flexDirection={['column', 'column', 'row']}
    justifyContent={['center', 'center', 'center']}
    tabletRow={true}
  />
)

export default HomeActions
