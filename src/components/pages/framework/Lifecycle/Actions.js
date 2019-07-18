import React from 'react'

import { HeroActionsNew as HeroActions } from 'src/fragments'
import { dashboard, docs } from 'src/constants/newUrls'

const Actions = props => (
  <HeroActions
    firstBtn={{
      name: 'get started free',
      to: dashboard,
      completed: true,
      className: 'position-hero',
    }}
    secondBtn={{
      name: 'visit docs',
      to: docs,
      completed: true,
      className: 'position-hero',
    }}
    buttonWidth={['300px', '300px', '176px']}
    flexDirection={['column', 'column', 'row']}
    justifyContent={['center', 'center', 'left']}
    tabletRow={true}
  />
)

export default Actions
