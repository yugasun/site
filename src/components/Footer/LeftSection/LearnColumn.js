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
    header='Learn'
    listItems={[
      {
        name: 'Courses',
        navProps: { to: courses, crossDomain: true },
      },
      {
        name: 'What?',
        navProps: { to: what, crossDomain: true },
      },
      {
        name: 'Why?',
        navProps: { to: why, completed: true },
      },
      {
        name: 'Use cases',
        navProps: { to: useCases, completed: true },
      },
      {
        name: 'Examples',
        navProps: { to: examples, completed: true },
      },
      {
        name: 'Case studies',
        navProps: { to: caseStudies, completed: true },
      },
      {
        name: 'Comparisons',
        navProps: { to: comparisons, completed: true },
      },
    ]}
  />
)

export default LearnColumn
