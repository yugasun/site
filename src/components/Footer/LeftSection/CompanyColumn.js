import React from 'react'

import FooterListColumn from './Column'
import { team, jobs, contact } from 'src/constants/newUrls'

const CompanyColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Company'
    listItems={[
      {
        name: 'Overview',
        navProps: { to: team, completed: true },
      },
      {
        name: 'Join us',
        navProps: { to: jobs, completed: true },
      },
      {
        name: 'Contact',
        navProps: { to: contact, crossDomain: true },
      },
    ]}
  />
)

export default CompanyColumn
