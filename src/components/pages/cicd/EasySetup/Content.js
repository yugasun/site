import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const EasySetupContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>
      Easy setup, zero maintenance
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Connect to your AWS and Github accounts, select your repo, and you are ready to test and deploy. No more configuration of steps, shell scripts, test commands, dependency installation, deploy commands or configuration files in your repo.
      <br/>
      <br/>
      Serverless CI/CD inspects the serverless.yml in your repository and automatically configures tests and deployments. 
    </P0>
  </Flex>
)

export default EasySetupContent
