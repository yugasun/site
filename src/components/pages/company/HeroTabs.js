import React from 'react'
import { Box } from 'serverless-design-system'
import { HeroTabsNewest as HeroTabs } from 'src/fragments'
import { company } from 'src/constants/urls'

const data = [
  {
    label: 'overview',
    value: 'overview',
    navProps: { to: company.team },
  },
  {
    label: 'jobs',
    value: 'jobs',
    navProps: { to: company.jobs },
  },
  {
    label: 'champions',
    value: 'champions',
    navProps: { to: company.champions },
  },
  {
    label: 'contact',
    value: 'contact',
    navProps: { to: company.contact, crossDomain: true },
  },
]

export default ({ selected }) => (
  <Box mb={[3, 3, 5]}>
    <HeroTabs data={data} selected={selected} />
  </Box>
)
