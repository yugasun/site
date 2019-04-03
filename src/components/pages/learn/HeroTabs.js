import React from 'react'

import { HeroTabsNew as HeroTabs } from 'src/fragments'
import { learn } from 'src/constants/urls'

const data = [
  {
    label: 'overview',
    value: 'overview',
    navProps: { to: learn.why },
  },
  {
    label: 'use cases',
    value: 'use-cases',
    navProps: { to: learn.useCases },
  },
  {
    label: 'comparisons',
    value: 'comparisons',
    navProps: { to: learn.comparisons },
  },
  {
    label: 'case studies',
    value: 'case-studies',
    navProps: { to: learn.caseStudy },
  },
  {
    label: 'courses',
    value: 'courses',
    navProps: { to: learn.courses },
  },
]

export default ({ selected }) => <HeroTabs data={data} selected={selected} />
