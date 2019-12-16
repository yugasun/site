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
            to: blog,
            backgroundOnHover: true,
            completed: true,
          }}
        >
          Blog
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
          Forum
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: slack,
            backgroundOnHover: true,
            crossDomain: true,
          }}
        >
          Slack
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: meetups,
            crossDomain: true,
            backgroundOnHover: true,
          }}
        >
          Meetups
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
          Partners
        </SubMenuItem>
      </ListItem.noStyleType>
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
          About us
        </SubMenuItem>
      </ListItem.noStyleType>
      <ListItem.noStyleType>
        <SubMenuItem
          navProps={{
            to: jobs,
            completed: true,
            backgroundOnHover: true,
          }}
        >
          Jobs
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
          Contact us
        </SubMenuItem>
      </ListItem.noStyleType>
    </List>
  </Flex>
)

export default Resource
