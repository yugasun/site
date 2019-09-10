import React from 'react'
import { Flex, Text } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const IndustryStandardContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
    <Heading.h3 mb={22}>Simplicity</Heading.h3>

    <P0 mb={[42, 42, 0]}>
      Serverless Components are built around higher-order use-cases (e.g. a
      website, blog, payment system, image service). Irrelevant low-level
      infrastructure details are abstracted away, and simpler configuration is
      offered instead.
    </P0>
  </Flex>
)

export default IndustryStandardContent
