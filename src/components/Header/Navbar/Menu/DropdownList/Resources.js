import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import { plugins, blog } from 'src/constants/newUrls'

const Learn = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: plugins,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Plugins
      </SubMenuItem>
    </ListItem.noStyleType>
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
  </List>
)

export default Learn
