import React from 'react'

import FooterListColumn from './Column'
import {
  what,
  why,
  useCases,
  examples,
  caseStudies,
  comparisons,
  courses,
} from 'src/constants/urls'

const LearnColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='学习'
    listItems={[
      {
        name: '课程',
        navProps: { to: courses, crossDomain: true },
      },
      {
        name: '概述',
        navProps: { to: what, completed: true },
      },
      {
        name: '功能',
        navProps: { to: why, completed: true },
      },
      {
        name: '使用用例',
        navProps: { to: useCases, completed: true },
      },
      {
        name: '案例介绍',
        navProps: { to: examples, completed: true },
      },
      {
        name: '实例操作',
        navProps: { to: caseStudies, completed: true },
      },
      {
        name: '功能对比',
        navProps: { to: comparisons, completed: true },
      },
    ]}
  />
)

export default LearnColumn
