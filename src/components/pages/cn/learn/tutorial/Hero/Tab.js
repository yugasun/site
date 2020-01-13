import React from 'react'
import { Box } from 'serverless-design-system'
import { HeroTabs } from 'src/fragments'
import { learn } from 'src/constants/urls'

const data = [
  {
    label: 'All Courses',
    value: 'all-courses',
    navProps: { to: learn },
  },
]

export default ({ selected }) => (
  <Box mb={[3, 3, 5]}>
    <HeroTabs data={data} selected={selected} />
  </Box>
)
