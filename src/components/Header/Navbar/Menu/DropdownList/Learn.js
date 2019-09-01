import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import {
  learn,
  what,
  why,
  useCases,
  examples,
  caseStudies,
  comparisons,
} from 'src/constants/newUrls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: learn,
          backgroundOnHover: true,
          crossDomain: true,
        }}
      >
        courses
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: what,
          crossDomain: true,
          backgroundOnHover: true,
        }}
      >
        what
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: why,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        why
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: useCases,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        use cases
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: examples,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        examples
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: caseStudies,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        case studies
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: comparisons,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        comparisons
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource
