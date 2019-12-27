import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import {
  learn,
  what,
  why,
  useCases,
  examples,
  caseStudies,
  comparisons,
} from 'src/constants/urls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: learn,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        课程
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: what,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        概述
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: why,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        功能
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: useCases,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        使用用例
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: examples,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        案例介绍
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: caseStudies,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        实例操作
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: comparisons,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        功能对比
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource
