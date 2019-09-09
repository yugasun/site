import React from 'react'
import { Flex } from 'serverless-design-system'
import zeroCodeImage from 'src/assets/images/pages/policies/zero-code.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomPolicies = props => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={zeroCodeImage}
      width={['100%', '100%', 336, 436, 594]}
      height={[306, 306, 342, 442, 603]}
    />
  </Flex>
)

export default CustomPolicies
