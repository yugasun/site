import React from 'react'

import FooterListColumn from './Column'
import {
  github,
  forum,
  slack,
  meetups,
  partners,
  courses,
} from 'src/constants/urls'

const CommunityColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Community'
    listItems={[
      {
        name: 'GitHub',
        navProps: { to: github, crossDomain: true },
      },
      {
        name: 'Forum',
        navProps: { to: forum, crossDomain: true },
      },
      {
        name: 'Slack',
        navProps: { to: slack, completed: true },
      },
      {
        name: 'Meetups',
        navProps: { to: meetups, completed: true },
      },
      {
        name: 'Partners',
        navProps: { to: partners, completed: true },
      },
    ]}
  />
)

export default CommunityColumn
