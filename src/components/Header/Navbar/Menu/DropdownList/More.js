import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import {
  github,
  forum,
  slack,
  meetups,
  partners,
  courses,
} from 'src/constants/newUrls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
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
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: forum,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        Forum
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: slack,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Slack
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: meetups,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        Meetups
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: partners,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Partners
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: courses,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Community courses
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource
