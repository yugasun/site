import React from 'react'
import styled from 'styled-components'
import PrefooterNewest from 'src/components/PrefooterNewest'
import { InternalLink } from 'src/fragments'
import { P } from 'src/fragments/DesignSystem'

const actions = [
  {
    name: 'use cases',
    navProps: {
      to: '/learn/use-cases/',
      completed: true,
    },
  },
  {
    name: 'comparisons',
    navProps: {
      to: '/learn/comparisons/',
      completed: true,
    },
  },
  {
    name: 'case studies',
    navProps: {
      to: '/learn/case-studies/',
      completed: true,
    },
  },
]

const DecoratedLink = styled(InternalLink)`
  color: #5b5b5b;
  text-decoration: none;
  border-bottom: 1px solid #fd5750;

  &:hover {
    color: #5b5b5b;
  }
`

const sentences = [
  <P key='firstPart' color='gray.3' mb={0}>
    Check out all the different{' '}
    <DecoratedLink to='/learn/use-cases'>use cases</DecoratedLink> for
    serverless applications. Take a peek at how the Serverless Framework{' '}
    <DecoratedLink to='/learn/comparisons'>
      compares to other software
    </DecoratedLink>
    . Talk to us directly on{' '}
    <DecoratedLink to='/enterprise/'>the enterprise contact form</DecoratedLink>
    <br />
    <br />
    Or if you’re ready, follow our{' '}
    <DecoratedLink to='/framework/docs/getting-started/'>
      step-by-step guide
    </DecoratedLink>{' '}
    to start building a Serverless Application with your favorite language.
  </P>,
]

const LearnPrefooter = () => (
  <PrefooterNewest
    heading='Next Steps'
    sentences={sentences}
    actions={actions}
    prefooterHeight={[600, 600, 500, 500, 550, 600]}
  />
)

export default LearnPrefooter
