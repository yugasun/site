import React from 'react'
import { Image, Flex } from 'serverless-design-system'
import developDeployImage from 'src/assets/images/pages/cn/plugins/reusability.png'
import Content from './Content'

const CustomPolicies = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Flex>
      <Image
        src={developDeployImage}
        width={['100%', '100%', 370, 450, 520, 592]}
        // height={[200, 200, 200, 220, 270, 289]}
      />
    </Flex>
  </Flex>
)

export default CustomPolicies
