import React from 'react'

import FooterListColumn from './Column'
import {
  examples,
  plugins,
  blog,
  caseStudies,
  courses,
} from 'src/constants/urls'

const ResourcesColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Resources'
    listItems={[
      {
        name: 'Plugins',
        navProps: { to: plugins, completed: true },
      },
      {
        name: 'Blog',
        navProps: { to: blog, completed: true },
      },
    ]}
  />
)

export default ResourcesColumn
