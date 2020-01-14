import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import {
  cli,
  cicd,
  dashboardPage,
  monitoring,
  alerts,
  debugging,
  integrations,
  components,
} from 'src/constants/urls.cn'

// TODO: change to cn after complete
import { plugins } from 'src/constants/urls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: cli,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        CLI
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: dashboardPage,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        Dashboard
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: monitoring,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        监控
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: cicd,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        CI/CD
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: alerts,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        告警
      </SubMenuItem>
    </ListItem.noStyleType>
    {/*
      <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: policies,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        规范
      </SubMenuItem>
    </ListItem.noStyleType>
     */}
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: debugging,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        调试
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: integrations,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        信息整合
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: plugins,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        插件
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: components,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        组件
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource
