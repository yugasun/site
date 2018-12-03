import React from 'react'
import { Text } from 'serverless-design-system'
import Prefooter from 'src/components/Prefooter'

const sentences = [
  'To get started, pop open your terminal & run:',
  (
    <Text.p
      color='white'
      fontFamily='Serverless'
    >
      npm install serverless -g
    </Text.p>
  ),
]

const actions = [
  {
    name: 'documentation',
    navProps: {
      to: '/framework/docs/',
      completed: false,
    },
  },
  {
    name: 'serverless examples',
    navProps: {
      to: '/framework/docs/providers/aws/examples/',
      completed: false,
    },
  },
  {
    name: 'serverless plugins',
    navProps: {
      to: 'https://github.com/serverless/serverless',
      crossDomain: true,
      completed: false,
    },
  },
]

const NewToServerlessPrefooter = () => (
  <Prefooter
    heading='New to serverless?'
    sentences={sentences}
    actions={actions}
  />
)

export default NewToServerlessPrefooter