import React from 'react'
import { Text } from 'serverless-design-system'
import Prefooter from 'src/components/Prefooter'

const sentences = [
  (
    <Text.p 
      color='gray'
      mt={8}
      fontFamily='SoleilBk'
    >
      To get started, pop open your terminal &amp; run:
    </Text.p>
  ),
  (
    <Text.p
      color='gray.2'
      fontFamily='Serverless'
      fontSize={14}
    >
      npm install serverless -g
    </Text.p>
  ),
]

const actions = [
  {
    name: 'documentation',
    navProps: {
      to: '/framework/docs',
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