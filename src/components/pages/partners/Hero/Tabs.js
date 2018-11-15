import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import { examples, developers, resources, community } from 'src/constants/urls'

const data = [
  {
    label: 'partners',
    value: 'partners',
    navProps: { to: developers.documentation.framework }
  },
  {
    label: 'forum',
    value: 'forum',
    navProps: { to: resources.forum, crossDomain: true }
  },
  {
    label: 'events',
    value: 'events',
    navProps: { to: community.events },
  },
  {
    label: 'slack',
    value: 'slack',
    navProps: { to: community.slack, crossDomain: true },
  },
  {
    label: 'workshops',
    value: 'workshops',
    navProps: { to: community.workshops },
  }
]

const tabWidth = {
  selected: '126px',
  notSelected: '96px'
}

const AllTabs = ({selected}) => {
  return (
    <HeroTabs data={data} selected={selected} tabWidth={tabWidth} />
  )
}

export default AllTabs
