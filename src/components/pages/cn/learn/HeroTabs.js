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
} from 'src/constants/urls.cn'

const data = [
  // {
  //   label: '课程',
  //   value: 'learn',
  //   navProps: { to: learn },
  // },
  {
    label: '概述',
    value: 'what',
    navProps: { to: what },
  },
  {
    label: '功能',
    value: 'why',
    navProps: { to: why },
  },
  {
    label: '应用场景',
    value: 'use-cases',
    navProps: { to: useCases },
  },
  // {
  //   label: '案例介绍',
  //   value: 'examples',
  //   navProps: { to: examples },
  // },
  {
    label: '最佳实践',
    value: 'case-studies',
    navProps: { to: caseStudies },
  },
  {
    label: '功能对比',
    value: 'comparisons',
    navProps: { to: comparisons },
  },
]

export default ({ selected }) => (
  <Box mb={[3, 3, 5]}>
    <HeroTabs data={data} selected={selected} />
  </Box>
)
