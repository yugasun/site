import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import { examples, developers } from 'src/constants/urls'

const data = [
  {
    label: 'partners',
    value: 'partners',
    navProps: { to: developers.documentation.framework }
  },
  {
    label: 'forum',
    value: 'forum',
    navProps: { to: developers.quickStart.others }
  },
  {
    label: 'events',
    value: 'events',
    navProps: { to: examples },
  },
  {
    label: 'slack',
    value: 'slack',
    navProps: { to: examples },
  },
  {
    label: 'workshops',
    value: 'workshops',
    navProps: { to: examples },
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
