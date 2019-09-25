import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>
      A single pane for your applications & services
    </Heading.h3>
    <P0 mb={[42, 42, 0]}>
      With the Serverless Framework Dashboard you get a single view of all your
      applications and services across your organization. All deployed services
      are organized into applications, services, and instances so you can see what
      is deployed across stages and regions.
      <br />
      <br />
      The Dashboard provides visibility into everything you need, and nothing
      you don’t. Get visibility into deployments, metrics, alerts and logs
      without ever needing to sift through the AWS Console or other tools.
    </P0>
  </Flex>
)

export default IndustryStandardContent
