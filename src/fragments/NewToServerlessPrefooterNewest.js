import React from 'react'
import { Text } from 'serverless-design-system'
import PrefooterNewest from 'src/components/PrefooterNewest'

const sentences = [
  <Text.p
    color='gray.3'
    mt={[0, 0, 0]}
    mb={[0, 0, 0]}
    fontFamily='SoleilBk'
    lineHeight={1.63}
  >
    To get started, pop open your terminal &amp; run:
  </Text.p>,
  <Text.p
    color='gray.2'
    mb={[0, 0, 62]}
    mt={0}
    fontFamily='Serverless'
    fontSize={14}
    letterSpacing={'0.4px'}
    lineHeight={1.71}
  >
    npm install serverless -g
  </Text.p>,
]

const actions = [
  {
    name: 'documentation',
    navProps: {
      to: '/framework/docs/',
      completed: true,
    },
  },
  {
    name: 'examples',
    navProps: {
      to: '/examples/',
      completed: true,
    },
  },
  {
    name: 'plugins',
    navProps: {
      to: 'https://github.com/serverless/plugins',
      crossDomain: true,
      completed: false,
    },
  },
]

const NewToServerlessPrefooter = () => (
  <PrefooterNewest
    heading='New to serverless?'
    sentences={sentences}
    actions={actions}
  />
)

export default NewToServerlessPrefooter
