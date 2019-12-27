import React from 'react'
import { List, ListItem, Flex, Heading } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import {
  github,
  forum,
  slack,
  meetups,
  partners,
  about,
  jobs,
  contact,
  reinvent,
  blog,
} from 'src/constants/urls'

//TODO: break this into components
const Resource = () => (
  <Flex>
    <List m={0, 0, 0, 0} ml={[4, 4, 0]} p={0} style={{ width: '100px' }}>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: 'https://serverlesscloud.cn/blog',
            backgroundOnHover: true,
            crossDomain: true,
          }}
        >
          博客
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: 'https://github.com/serverless/serverless/blob/master/README_CN.md',
            backgroundOnHover: true,
            crossDomain: true,
          }}
        >
          GitHub
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: 'https://serverlesscloud.cn/forum',
            crossDomain: true,
            backgroundOnHover: true,
          }}
        >
          论坛
        </SubMenuItem>
      </ListItem.noStyleType>
    </List>
    <List m={0} ml={[4, 4, 0, 0, 30]} p={0} style={{ width: '100px' }}>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: 'https://serverless.com/partners/cloud/tencent/chinese/',
            backgroundOnHover: true,
            crossDomain: true,
          }}
        >
          关于我们
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: 'https://github.com/serverless-tencent/serverless-tencent-scf/issues',
            backgroundOnHover: true,
            crossDomain: true,
          }}
        >
          问题反馈
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: 'https://github.com/ServerlessCN/serverlesscloud.cn/blob/master/content/about/index.md',
            backgroundOnHover: true,
            crossDomain: true,
          }}
        >
          联系方式
        </SubMenuItem>
      </ListItem.noStyleType>
    </List>
  </Flex>
)

export default Resource
