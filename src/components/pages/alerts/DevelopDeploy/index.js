import React from 'react'
import { Flex } from 'serverless-design-system'
import developDeployImage from 'src/assets/images/pages/alerts/develop-deploy-monitor.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const DevelopDeploy = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Flex mx={'auto'}>
      <Image
        src={developDeployImage}
        width={['100%', '100%', 300, 300, 300, 308]}
        height={[400, 400, 400, 400, 420, 476]}
      />
    </Flex>
  </Flex>
)

export default DevelopDeploy
