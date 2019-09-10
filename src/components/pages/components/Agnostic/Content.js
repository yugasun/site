import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'

const CustomPoliciesContent = props => (
  <Flex flexDirection='column' width={[1, 1, 0.4]}>
    <Heading.h3 mb={22}>Vendor-agnostic</Heading.h3>
    <P0 mb={[42, 42, 0]}>
      Serverless Components are designed to be entirely vendor agnostic,
      enabling you to easily use services from different vendors, together!
      Like, AWS Lambda, AWS S3, Azure Functions, Google Big Query, Twilio,
      Stripe, Algolia, Cloudflare Workers and more.
    </P0>
  </Flex>
)

export default CustomPoliciesContent
