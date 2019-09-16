import React from 'react'
import { Flex } from 'serverless-design-system'
import securelyManage1Image from 'src/assets/images/pages/dashboard/securely-manage-1.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomPolicies = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={securelyManage1Image}
      width={['100%', '100%', 336, 450, 520, 592]}
      height={[110, 110, 123, 170, 200, 217]}
    />
  </Flex>
)

export default CustomPolicies
