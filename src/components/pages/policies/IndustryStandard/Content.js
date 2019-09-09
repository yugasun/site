import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>Enforce industry standard policies</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Framework comes pre-loaded with configurable policies out of
      the box. Use these policies to enforce security requirements (e.g. ensure
      no wildcard IAM roles are created), operational best practices (e.g.
      ensure a dead letter queues is attached to each function), and
      organizational conventions (e.g. required tags, or function naming
      conventions). <br />
      <br /> Use these out of the box policies to help enforce NIST, CIS, NSA
      and ISO 27001 requirements.
    </P0>
  </Flex>
)

export default IndustryStandardContent
