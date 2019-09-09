import React from 'react'
import { Flex } from 'serverless-design-system'
import customPoliciesImage from 'src/assets/images/pages/policies/custom-policies.jpg'
import Content from './Content'
import Image from '../ImageWithShadows'

const CustomPolicies = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={customPoliciesImage}
      width={[300, 300, 336, 450, 520, 592]}
      height={[110, 110, 123, 170, 200, 217]}
    />
  </Flex>
)

export default CustomPolicies
