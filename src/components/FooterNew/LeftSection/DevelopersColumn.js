import React from 'react'

import FooterListColumn from './Column'
import { developersMenu as developers } from 'src/constants/urls'

const DevelopersColumn = () => (
  <FooterListColumn
    header='developers'
    listItems={[
      {
        name: 'docs',
        navProps: { to: developers.docs, completed: true },
      },
      {
        name: 'plugins',
        navProps: { to: developers.plugins, completed: true },
      },
      {
        name: 'examples',
        navProps: { to: developers.examples, completed: true },
      },
      {
        name: 'courses',
        navProps: { to: developers.courses, completed: true },
      },
      {
        name: 'quick starts',
        navProps: { to: developers.quickStarts, completed: true },
      },
      {
        name: 'acceleration',
        navProps: { to: developers.acceleration, completed: true },
      },
    ]}
  />
)

export default DevelopersColumn
