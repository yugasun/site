import React from 'react'

import FooterListColumn from './Column'
import {
  dashboardPage,
  monitoring,
  alerts,
  policies,
  cli,
  cicd,
  debugging,
  integrations,
  components,
} from 'src/constants/urls.cn'
import { plugins } from 'src/constants/urls'

const ProductsColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header="产品"
    listItems={[
      {
        name: 'CLI',
        navProps: { to: cli, completed: true },
      },
      {
        name: '插件',
        navProps: { to: plugins, completed: true },
      },
      {
        name: '组件',
        navProps: { to: components, completed: true },
      },
      {
        name: 'Dashboard',
        navProps: { to: dashboardPage, completed: true },
      },
      {
        name: '监控',
        navProps: { to: monitoring, completed: true },
      },
      {
        name: 'CI/CD',
        navProps: { to: cicd, completed: true },
      },
      {
        name: '警告',
        navProps: { to: alerts, completed: true },
      },
      // {
      //   name: '规范',
      //   navProps: { to: policies, completed: true },
      // },
      {
        name: '调试',
        navProps: { to: debugging, completed: true },
      },
      {
        name: '信息整合',
        navProps: { to: integrations, completed: true },
      },
    ]}
  />
)

export default ProductsColumn
