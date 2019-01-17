import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import {
  Text
} from 'serverless-design-system'
import PrefooterNew from 'src/components/PrefooterNew'
import { InternalLink } from 'src/fragments'
import { P } from 'src/fragments/DesignSystem'

const actions = [
  {
    name: 'use cases',
    navProps: {
      to: '/learn/use-cases',
      completed: true,
    },
  },
  {
    name: 'comparisons',
    navProps: {
      to: '/learn/comparisons',
      completed: true,
    },
  },
  {
    name: 'case studies',
    navProps: {
      to: '/learn/case-study',
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
  (
    <P 
      key='firstPart'
      color='gray.3'
      mt={[76, 76, 43]}
      mb={[0, 0, 0]}
    >
      Check out all the different <DecoratedLink to='/learn/use-cases'>use cases</DecoratedLink> for serverless applications. Take a peek at how the Serverless Framework <DecoratedLink to='/learn/comparisons'>compares to other software</DecoratedLink>. Talk to us directly on <DecoratedLink to='/enterprise/'>the enterprise contact form</DecoratedLink>
      <br />
      <br />
      Or if you’re ready, follow our <DecoratedLink to='/learn/use-cases/'>step-by-step guide</DecoratedLink> to start building a Serverless Application with your favorite language.
    </P>
  )
]

const LearnPrefooter = () => (
  <PrefooterNew
    heading='Next Steps'
    sentences={sentences}
    actions={actions}
  />
)

export default LearnPrefooter
