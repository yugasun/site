import React from 'react'

import { HeroActions } from 'src/fragments'
import { dashboard, docs } from 'src/constants/urls'

const Actions = props => (
  <HeroActions
    firstBtn={{
      name: 'get started free',
      to: dashboard,
      dashboardLink: true,
    }}
    secondBtn={{
      name: 'visit docs',
      to: docs,
      completed: true,
    }}
    buttonWidth={['300px', '300px', '176px']}
    flexDirection={['column', 'column', 'row']}
    justifyContent={['center', 'center', 'left']}
    tabletRow={true}
  />
)

export default Actions
