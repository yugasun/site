import React from 'react'

import { HeroTabs } from 'src/fragments'
import { plugins, blog } from 'src/constants/urls'

const data = [
  {
    label: 'Plugins',
    value: 'plugins',
    navProps: { to: plugins },
  },
  {
    label: 'Blog',
    value: 'blog',
    navProps: { to: blog },
  },
]

const AllTabs = ({ selected }) => {
  return <HeroTabs data={data} selected={selected} />
}

export default AllTabs
