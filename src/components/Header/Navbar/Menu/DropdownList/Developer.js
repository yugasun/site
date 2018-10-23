import React from 'react'
import { Box, Flex, List, ListItem } from 'serverless-design-system'

import SubMenuTitle from './SubMenuTitle'
import SubMenuItem from './SubMenuItem'
import { developers } from 'src/constants/urls'

const SubMenu = ({ title, options }) => (
  <Box>
    <SubMenuTitle>{title}</SubMenuTitle>
    <List m='0' p='0' mt={2}>
      {options.map(({ name, to, crossDomain, completed }) => (
        <ListItem.noStyleType my={2} key={name}>
          <SubMenuItem navProps={{ to, crossDomain, completed }}>
            {name}
          </SubMenuItem>
        </ListItem.noStyleType>
      ))}
    </List>
  </Box>
)


const quickStartOptions = [
  {
    name: 'aws',
    to: developers.quickStart.aws,
    completed: true,
  },
  {
    name: 'azure',
    to: developers.quickStart.azure,
    completed: true,
  },
  {
    name: 'google',
    to: developers.quickStart.google,
    completed: true,
  },
  {
    name: 'others',
    to: developers.quickStart.others,
    completed: true,
  },
]

const examplesOptions = [
  {
    name: `docs`,
    to: developers.examples.docs,
    completed: true,
  },
  {
    name: 'plugins',
    to: developers.examples.plugins,
    crossDomain: true,
    completed: false,
  },
  {
    name: 'examples',
    to: developers.examples.examples,
    crossDomain: true,
    completed: false,
  },
]

const Developer = () => (
  <Flex flexWrap='wrap'>
    <Box width={[1, 1, 1 / 2]}>
      <SubMenu title='quick starts' options={quickStartOptions} />
    </Box>
    <Box width={[1, 1, 1 / 2]}>
      <SubMenu title='resources' options={examplesOptions} />
    </Box>
  </Flex>
)

export default Developer