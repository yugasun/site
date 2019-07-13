import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import { resources, community, company } from 'src/constants/urls'
import { github, forum, slack, meetups, partners } from 'src/constants/newUrls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: github,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        github
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
        forum
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
        slack
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: meetups,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        meetups
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: partners,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        partners
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource
