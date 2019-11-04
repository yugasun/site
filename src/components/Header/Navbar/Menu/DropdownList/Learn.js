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
} from 'src/constants/urls'

const Resource = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: learn,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Free Courses
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: what,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        What?
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: why,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Why?
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: useCases,
          completed: true,
          backgroundOnHover: true,
        }}
      >
        Use cases
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: examples,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Examples
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType>
      <SubMenuItem
        navProps={{
          to: caseStudies,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        Case studies
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
        Comparisons
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Resource
