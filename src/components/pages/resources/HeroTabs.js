import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import { github, forum, slack, meetups, partners } from 'src/constants/newUrls'

const data = [
  {
    label: 'github',
    value: 'github',
    navProps: { to: github, crossDomain: true },
  },
  {
    label: 'forum',
    value: 'forum',
    navProps: { to: forum, crossDomain: true },
  },
  {
    label: 'slack',
    value: 'slack',
    navProps: { to: slack, completed: true },
  },
  {
    label: 'meetups',
    value: 'meetups',
    navProps: { to: meetups, completed: true },
  },
  {
    label: 'partners',
    value: 'partners',
    navProps: { to: partners, completed: true },
  },
]

const WorkshopsTabs = ({ selected }) => (
  <HeroTabs data={data} selected={selected} />
)

export default WorkshopsTabs
