import React from 'react'

import FooterListColumn from './Column'
import {
  team,
  jobs,
  contact,
  termsOfService,
  privacyPolicy,
} from 'src/constants/urls'

const CompanyColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header="更多"
    listItems={[
      {
        name: '关于我们',
        navProps: {
          to: 'https://serverless.com/partners/cloud/tencent/chinese/',
          crossDomain: true,
        },
      },
      {
        name: '问题反馈',
        navProps: {
          to:
            'https://github.com/serverless-tencent/serverless-tencent-scf/issues',
          crossDomain: true,
        },
      },
      {
        name: '联系方式',
        navProps: {
          to:
            'https://github.com/ServerlessCN/serverlesscloud.cn/blob/master/content/about/index.md',
          crossDomain: true,
        },
      },
      {
        name: '服务条款',
        navProps: { to: termsOfService, crossDomain: true },
      },
      {
        name: '隐私政策',
        navProps: { to: privacyPolicy, crossDomain: true },
      },
    ]}
  />
)

export default CompanyColumn
