import React from 'react'

import { HeroTabsNewest as HeroTabs } from 'src/fragments'
import {
  learn,
  what,
  why,
  useCases,
  examples,
  caseStudies,
  comparisons,
} from 'src/constants/newUrls'

const data = [
  {
    label: 'learn',
    value: 'learn',
    navProps: { to: learn },
  },
  {
    label: 'what?',
    value: 'what',
    navProps: { to: what },
  },
  {
    label: 'why?',
    value: 'why',
    navProps: { to: why },
  },
  {
    label: 'use cases',
    value: 'use-cases',
    navProps: { to: useCases },
  },
  {
    label: 'examples',
    value: 'examples',
    navProps: { to: examples },
  },
  {
    label: 'case studies',
    value: 'case-studies',
    navProps: { to: caseStudies },
  },
  {
    label: 'comparisons',
    value: 'comparisons',
    navProps: { to: comparisons },
  },
]

export default ({ selected }) => <HeroTabs data={data} selected={selected} />
