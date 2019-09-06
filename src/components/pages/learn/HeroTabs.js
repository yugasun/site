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
    label: 'Learn',
    value: 'learn',
    navProps: { to: learn },
  },
  {
    label: 'What?',
    value: 'what',
    navProps: { to: what },
  },
  {
    label: 'Why?',
    value: 'why',
    navProps: { to: why },
  },
  {
    label: 'Use cases',
    value: 'use-cases',
    navProps: { to: useCases },
  },
  {
    label: 'Examples',
    value: 'examples',
    navProps: { to: examples },
  },
  {
    label: 'Case studies',
    value: 'case-studies',
    navProps: { to: caseStudies },
  },
  {
    label: 'Comparisons',
    value: 'comparisons',
    navProps: { to: comparisons },
  },
]

export default ({ selected }) => <HeroTabs data={data} selected={selected} />
