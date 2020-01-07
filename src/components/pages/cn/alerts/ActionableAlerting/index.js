import React from 'react'
import { Flex } from 'serverless-design-system'
import actionableAlertingImage from 'src/assets/images/pages/alerts/actionable-alerting.png'
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
      src={actionableAlertingImage}
      width={['100%', '100%', 336, 450, 520, 592]}
      height={[400, 400, 450, 500, 600, 629]}
    />
  </Flex>
)

export default CustomPolicies
