import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import { homepage, cn } from 'src/constants/urls'

const LanguageDropdownList = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: homepage,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        English
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: cn,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        简体中文
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default LanguageDropdownList
