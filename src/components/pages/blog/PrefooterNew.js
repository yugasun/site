import React from 'react'
import PrefooterNewest from 'src/components/PrefooterNewest'
import { P } from 'src/fragments/DesignSystem'

const sentences = [
  <P color='gray.3' mt={[0, 0, 0]} mb={[0, 0, 0]}>
    To get started, pop open your terminal &amp; run:
  </P>,
  <P
    color='gray.2'
    mt={0}
    fontFamily='Serverless'
    fontSize={16}
    letterSpacing={0}
    lineHeight={1.71}
    mb={0}
  >
    npm install serverless -g
  </P>,
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
      to: '/plugins/',
      completed: true,
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
