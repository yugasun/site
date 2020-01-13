import React from 'react'
import { Flex } from 'serverless-design-system'
import confidenceImage from 'src/assets/images/pages/monitoring/deploy-with-confidence.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomPolicies = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={confidenceImage}
      width={['100%', '100%', 336, 450, 520, 592]}
      height={[260, 260, 300, 340, 400, 441]}
    />
  </Flex>
)

export default CustomPolicies
