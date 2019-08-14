import React from 'react'
import { List, ListItem } from 'serverless-design-system'

import SubMenuItem from './SubMenuItem'
import {
  examples,
  plugins,
  blog,
  caseStudies,
  courses,
} from 'src/constants/newUrls'

const Learn = () => (
  <List m={0} ml={[4, 4, 0]} p={0}>
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
          to: plugins,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        plugins
      </SubMenuItem>
    </ListItem.noStyleType>
    <ListItem.noStyleType mb={2}>
      <SubMenuItem
        navProps={{
          to: blog,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        blog
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
          to: courses,
          backgroundOnHover: true,
          completed: true,
        }}
      >
        courses
      </SubMenuItem>
    </ListItem.noStyleType>
  </List>
)

export default Learn
