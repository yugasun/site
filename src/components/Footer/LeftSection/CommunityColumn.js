import React from 'react'

import FooterListColumn from './Column'
import { resources, community, company } from 'src/constants/urls'

const ResourceColumn = () => (
  <FooterListColumn
    header='community'
    listItems={[
      {
        name: 'partners',
        navProps: { to: community.partners, completed: true },
      },
      {
        name: 'forum',
        navProps: { to: resources.forum, crossDomain: true },
      },
      {
        name: 'events',
        navProps: { to: resources.events, completed: true },
      },
      {
        name: 'slack',
        navProps: { to: resources.slack, crossDomain: true },
      },
      {
        name: 'workshops',
        navProps: { to: resources.workshops, completed: true },
      },
      {
        name: 'champions',
        navProps: { to: company.champions, completed: true },
      },
    ]}
  />
)

export default ResourceColumn
