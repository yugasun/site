import React from 'react'

import FooterListColumn from './Column'
import {
  plugins,
  components,
  dashboardPage,
  monitoring,
  alerts,
  policies,
  cli,
  cicd,
  debugging,
  integrations,
} from 'src/constants/urls'

const ProductsColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='Product'
    listItems={[
      {
        name: 'CLI',
        navProps: { to: cli, completed: true },
      },
      {
        name: 'Plugins',
        navProps: { to: plugins, completed: true },
      },
      {
        name: 'Components',
        navProps: { to: components, completed: true },
      },
      {
        name: 'Dashboard',
        navProps: { to: dashboardPage, completed: true },
      },
      {
        name: 'Monitoring',
        navProps: { to: monitoring, completed: true },
      },
      {
        name: 'CI/CD',
        navProps: { to: cicd, completed: true },
      },
      {
        name: 'Alerts',
        navProps: { to: alerts, completed: true },
      },
      {
        name: 'Policies',
        navProps: { to: policies, completed: true },
      },
      {
        name: 'Debugging',
        navProps: { to: debugging, completed: true },
      },
      {
        name: 'Integrations',
        navProps: { to: integrations, completed: true },
      },
    ]}
  />
)

export default ProductsColumn
