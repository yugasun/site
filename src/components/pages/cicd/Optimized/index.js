import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'
import { plugins, cli, components } from 'src/constants/urls'

const Optimized = props => (
  <Flex
    flexDirection='column'
    mx='auto'
    width={[1, 1, 0.8, 0.8, '80%']}
    pb={[92, 92, 92, 92, 132]}
  >
    <Heading.h3 align={['left', 'left', 'center']}>
      Optimized for Serverless Workflows
    </Heading.h3>

    <P>
      Serverless CI/CD is a new type of testing and deployment automation service laser focused on Serverless Framework
      development workflows. It is easily configured using concepts familiar to Serverless Framework developers like
      NPM package scripts, variables, and stages. Preview deployments, promotions and rollbacks are handled using the
      gitflow you already know and love.
    </P>

  </Flex>
)

export default Optimized
