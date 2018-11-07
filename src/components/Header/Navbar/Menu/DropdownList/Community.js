import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import { resources } from 'src/constants/urls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: resources.forum,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        forum
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: resources.events,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        events
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: resources.slack,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        slack
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: resources.workshops,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        workshops
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource