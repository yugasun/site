import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import { resources, community } from 'src/constants/urls'
import { Box } from 'serverless-design-system'

const data = [
  {
    label: 'partners',
    value: 'partners',
    navProps: { to: community.partners },
  },
  {
    label: 'forum',
    value: 'forum',
    navProps: { to: resources.forum, crossDomain: true },
  },
  {
    label: 'events',
    value: 'events',
    navProps: { to: resources.events },
  },
  {
    label: 'slack',
    value: 'slack',
    navProps: { to: resources.slack, crossDomain: true },
  },
  {
    label: 'workshops',
    value: 'workshops',
    navProps: { to: resources.workshops },
  },
]

const WorkshopsTabs = ({ selected }) => (
    <HeroTabs data={data} selected={selected} />
)

export default WorkshopsTabs