import React from 'react'
import { Box } from 'serverless-design-system'
import { HeroTabs } from 'src/fragments'
import {
  learn,
  what,
  why,
  useCases,
  examples,
  caseStudies,
  comparisons,
} from 'src/constants/urls'

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

export default ({ selected }) => (
  <Box mb={[3, 3, 5]}>
    <HeroTabs data={data} selected={selected} />
  </Box>
)
