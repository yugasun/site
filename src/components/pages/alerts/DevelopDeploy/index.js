import React from 'react'
import { Flex } from 'serverless-design-system'
import developDeployImage from 'src/assets/images/pages/alerts/develop-deploy-monitor.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomPolicies = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Flex pl={[0, 0, 0, 100, 100, 150]}>
      <Image
        src={developDeployImage}
        width={['100%', '100%', 300, 300, 300, 308]}
        height={[400, 400, 400, 400, 420, 476]}
      />
    </Flex>
  </Flex>
)

export default CustomPolicies
