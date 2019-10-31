import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import {
  cli,
  plugins,
  cicd,
  components,
  dashboardPage,
  monitoring,
  alerts,
  policies,
  debugging,
  integrations,
} from 'src/constants/urls'

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
        Monitoring
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
        Alerts
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: policies,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Policies
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: debugging,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Debugging
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
        Integrations
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
        Plugins
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
        Components
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource
