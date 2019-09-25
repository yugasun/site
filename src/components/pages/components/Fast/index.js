import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import fastImage from 'src/assets/images/pages/components/20x-faster.png'
import Content from './Content'

const CustomPolicies = props => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Flex mx='auto' justifyContent={['center']}>
      <Image
        src={fastImage}
        width={['70%', '70%', 300, 300, 300, 334]}
        height={[220, 220, 300, 300, 300, 334]}
      />
    </Flex>
  </Flex>
)

export default CustomPolicies
