import React from 'react'

import FooterListColumn from './Column'
import {
  examples,
  plugins,
  blog,
  caseStudies,
  courses,
} from 'src/constants/newUrls'

const ResourcesColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Resources'
    listItems={[
      {
        name: 'Examples',
        navProps: { to: examples, completed: true },
      },
      {
        name: 'Plugins',
        navProps: { to: plugins, completed: true },
      },
      {
        name: 'Blog',
        navProps: { to: blog, completed: true },
      },
      {
        name: 'Case studies',
        navProps: { to: caseStudies, completed: true },
      },
      {
        name: 'Courses',
        navProps: { to: courses, completed: true },
      },
    ]}
  />
)

export default ResourcesColumn
