import React from 'react'

import { HeroTabs } from 'src/fragments'
import { Box } from 'serverless-design-system'
import {
  github,
  forum,
  slack,
  meetups,
  partners,
  courses,
} from 'src/constants/urls'

const data = [
  {
    label: 'Github',
    value: 'github',
    navProps: { to: github, crossDomain: true },
  },
  {
    label: 'Forum',
    value: 'forum',
    navProps: { to: forum, crossDomain: true },
  },
  {
    label: 'Slack',
    value: 'slack',
    navProps: { to: slack, completed: true },
  },
  {
    label: 'Meetups',
    value: 'meetups',
    navProps: { to: meetups, crossDomain: true },
  },
  {
    label: 'Partners',
    value: 'partners',
    navProps: { to: partners, completed: true },
  },
  {
    label: 'Training',
    value: 'community-courses',
    navProps: { to: courses, completed: true },
  },
]

const WorkshopsTabs = ({ selected }) => (
  <Box mb={[3, 3, 5]}>
    <HeroTabs data={data} selected={selected} />
  </Box>
)

export default WorkshopsTabs
