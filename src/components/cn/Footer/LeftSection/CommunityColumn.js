import React from 'react'

import FooterListColumn from './Column'
import {
  blog,
  github,
  forum,
  sharon,
  partners,
  about,
  feedback,
  contact,
} from 'src/constants/urls.cn'

const CommunityColumn = ({ mobileOrder }) => (
  <FooterListColumn
    mobileOrder={mobileOrder}
    header="社区"
    listItems={[
      {
        name: '博客',
        navProps: { to: blog, crossDomain: true },
      },
      {
        name: 'GitHub',
        navProps: { to: github, crossDomain: true },
      },
      {
        name: '论坛',
        navProps: { to: forum, crossDomain: true },
      },
      {
        name: '关于我们',
        navProps: { to: about, crossDomain: true },
      },
      {
        name: '问题反馈',
        navProps: { to: feedback, crossDomain: true },
      },
      {
        name: '联系方式',
        navProps: { to: contact, crossDomain: true },
      },
    ]}
  />
)

export default CommunityColumn
