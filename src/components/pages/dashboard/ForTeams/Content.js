import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Serverless for Teams</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      The Serverless Framework takes collaboration to a new level. Add your
      entire team to the Dashboard so they can collaborate on their services
      while limiting access to sensitive resources. Collaboration is built into
      every feature of the Dashboard.
      <br />
      <br />
      For example,{' '}
      <InternalLink
        to={'/framework/docs/dashboard/output-variables/'}
        underline
      >
        shared output variables
      </InternalLink>{' '}
      enable developers to easily share state across independent services in a
      microservices architecture and the deep Github integration enables
      developers to work seamlessly across Github and the Serverless Framework.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
