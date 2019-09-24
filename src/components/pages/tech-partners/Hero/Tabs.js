import React from 'react'

import { HeroTabs } from 'src/fragments'
import { partners, forum, meetups, slack } from 'src/constants/urls'

const data = [
  {
    label: 'partners',
    value: 'partners',
    navProps: { to: partners },
  },
  {
    label: 'forum',
    value: 'forum',
    navProps: { to: forum, crossDomain: true },
  },
  {
    label: 'events',
    value: 'events',
    navProps: { to: meetups },
  },
  {
    label: 'slack',
    value: 'slack',
    navProps: { to: slack, crossDomain: true },
  },
]

const tabWidth = {
  selected: '126px',
  notSelected: '96px',
}

const AllTabs = ({ selected }) => {
  return <HeroTabs data={data} selected={selected} tabWidth={tabWidth} />
}

export default AllTabs
