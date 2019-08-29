import React from 'react'

import { HeroTabsNewest as HeroTabs } from 'src/fragments'
import { learn } from 'src/constants/urls'

const data = [
  {
    label: 'learn',
    value: 'learn',
    navProps: { to: learn.why },
  },
  {
    label: 'what?',
    value: 'what',
    navProps: { to: learn.useCases },
  },
  {
    label: 'why?',
    value: 'why',
    navProps: { to: learn.comparisons },
  },
  {
    label: 'use cases',
    value: 'use-cases',
    navProps: { to: learn.courses },
  },
  {
    label: 'examples',
    value: 'examples',
    navProps: { to: learn.courses },
  },
  {
    label: 'case studies',
    value: 'case-studies',
    navProps: { to: learn.courses },
  },
  {
    label: 'comparisons',
    value: 'comparisons',
    navProps: { to: learn.courses },
  },
]

export default ({ selected }) => <HeroTabs data={data} selected={selected} />
