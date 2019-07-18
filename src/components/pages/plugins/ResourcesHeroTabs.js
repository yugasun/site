import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import {
  examples,
  plugins,
  blog,
  caseStudies,
  courses,
} from 'src/constants/newUrls'

const data = [
  {
    label: 'examples',
    value: 'examples',
    navProps: { to: examples },
  },
  {
    label: 'plugins',
    value: 'plugins',
    navProps: { to: plugins },
  },
  {
    label: 'blog',
    value: 'blog',
    navProps: { to: blog },
  },
  {
    label: 'case studies',
    value: 'case studies',
    navProps: { to: caseStudies },
  },
  {
    label: 'courses',
    value: 'courses',
    navProps: { to: courses },
  },
]

const AllTabs = ({ selected }) => {
  return <HeroTabs data={data} selected={selected} />
}

export default AllTabs
