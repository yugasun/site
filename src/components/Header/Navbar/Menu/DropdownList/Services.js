import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import { training, support } from 'src/constants/newUrls'

const Learn = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: training,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Training
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: support,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Support
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Learn
