import React from 'react'
import { Box } from 'serverless-design-system'
import { HeroTabs } from 'src/fragments'
import { team, jobs, champions, contact } from 'src/constants/urls'

const data = [
  {
    label: 'overview',
    value: 'overview',
    navProps: { to: team },
  },
  {
    label: 'jobs',
    value: 'jobs',
    navProps: { to: jobs },
  },
  {
    label: 'champions',
    value: 'champions',
    navProps: { to: champions },
  },
  {
    label: 'contact',
    value: 'contact',
    navProps: { to: contact, crossDomain: true },
  },
]

export default ({ selected }) => (
  <Box mb={[3, 3, 5]}>
    <HeroTabs data={data} selected={selected} />
  </Box>
)
