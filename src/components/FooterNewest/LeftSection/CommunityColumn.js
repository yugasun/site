import React from 'react'

import FooterListColumn from './Column'
import {
  github,
  forum,
  slack,
  meetups,
  partners,
  blog,
} from 'src/constants/newUrls'

const CommunityColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Community'
    listItems={[
      {
        name: 'Blog',
        navProps: { to: blog, completed: true },
      },
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
