import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import { learn } from 'src/constants/urls'

const Learn = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: learn.why,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        why?
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: learn.useCases,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        use cases
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: learn.comparisons,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        comparisons
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        defaultColor = 'white'
        navProps={{
          to: learn.caseStudy,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        case studies
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Learn