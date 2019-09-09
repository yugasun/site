import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import zeroCodeImage from 'src/assets/images/pages/policies/zero-code.jpg'
import Content from './Content'

const CustomPolicies = props => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={zeroCodeImage}
      width={[300, 300, 336, 436, 594]}
      height={[306, 306, 342, 442, 603]}
    />
  </Flex>
)

export default CustomPolicies
