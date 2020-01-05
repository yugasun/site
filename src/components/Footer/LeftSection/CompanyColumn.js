import React from 'react'

import FooterListColumn from './Column'
import {
  team,
  jobs,
  contact,
  termsOfService,
  privacyPolicy,
  affiliates
} from 'src/constants/urls'

const CompanyColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Company'
    listItems={[
      {
        name: 'About us',
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
      {
        name: 'Affiliates',
        navProps: { to: affiliates, crossDomain: true },
      },
      {
        name: 'Terms of service',
        navProps: { to: termsOfService, crossDomain: true },
      },
      {
        name: 'Privacy Policy',
        navProps: { to: privacyPolicy, crossDomain: true },
      },
    ]}
  />
)

export default CompanyColumn
