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
        navProps: { to: developers.plugins, crossDomain: true },
      },
      {
        name: 'examples',
        navProps: { to: developers.examples, completed: true },
      },
      {
        name: 'quick starts',
        navProps: { to: developers.quickStarts, completed: true },
      },
    ]}
  />
)

export default DevelopersColumn