import React from 'react'

import FooterListColumn from './Column'
import {
  github,
  forum,
  slack,
  meetups,
  partners,
  blog,
} from 'src/constants/urls'

const CommunityColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header='社区'
    listItems={[
      {
        name: '博客',
        navProps: { to: 'https://serverlesscloud.cn/blog', crossDomain: true },
      },
      {
        name: 'GitHub',
        navProps: { to: 'https://github.com/serverless/serverless/blob/master/README_CN.md', crossDomain: true },
      },
      {
        name: '论坛',
        navProps: { to: 'https://serverlesscloud.cn/forum', crossDomain: true },
      },
      {
        name: '关于我们',
        navProps: { to: 'https://serverless.com/partners/cloud/tencent/chinese/', crossDomain: true },
      },
      {
        name: '问题反馈',
        navProps: { to: 'https://github.com/serverless-tencent/serverless-tencent-scf/issues', crossDomain: true },
      },
      {
        name: '联系方式',
        navProps: { to: 'https://github.com/ServerlessCN/serverlesscloud.cn/blob/master/content/about/index.md', crossDomain: true },
      },
    ]}
  />
)

export default CommunityColumn
