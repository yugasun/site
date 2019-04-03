import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import { developers } from 'src/constants/urls'

const data = [
  {
    label: 'documentation',
    value: 'documentation',
    navProps: { to: developers.documentation.framework },
  },
  {
    label: 'quick starts',
    value: 'quick-starts',
    navProps: { to: developers.quickStart.others },
  },
  {
    label: 'plugins',
    value: 'plugins',
    navProps: { to: developers.examples.plugins },
  },
  {
    label: 'examples',
    value: 'examples',
    navProps: { to: developers.examples.examples },
  },
  {
    label: 'courses',
    value: 'courses',
    navProps: { to: developers.examples.courses },
  },
]

const AllTabs = ({ selected }) => {
  return <HeroTabs data={data} selected={selected} />
}

export default AllTabs
