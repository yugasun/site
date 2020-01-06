import React from 'react'
import { List, ListItem, Flex, Heading } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
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

//TODO: break this into components
const Resource = () => (
  <Flex>
    <List m={(0, 0, 0, 0)} ml={[4, 4, 0]} p={0} style={{ width: '100px' }}>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: blog,
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
            to: github,
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
            to: forum,
            crossDomain: true,
            backgroundOnHover: true,
          }}
        >
          论坛
        </SubMenuItem>
      </ListItem.noStyleType>
      {/*
        <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: sharon,
            crossDomain: true,
            backgroundOnHover: true,
          }}
        >
          沙龙
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: partners,
            crossDomain: true,
            backgroundOnHover: true,
          }}
        >
          合作伙伴
        </SubMenuItem>
      </ListItem.noStyleType>
      */}
    </List>
    <List m={0} ml={[4, 4, 0, 0, 30]} p={0} style={{ width: '100px' }}>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: about,
            backgroundOnHover: true,
            completed: true,
          }}
        >
          关于我们
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: feedback,
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
            to: contact,
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
