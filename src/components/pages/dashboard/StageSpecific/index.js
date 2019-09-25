import React from 'react'
import { Flex } from 'serverless-design-system'
import stageSpecificImage from 'src/assets/images/pages/dashboard/stage-specific.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomPolicies = () => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={stageSpecificImage}
      width={['100%', '100%', 380, 450, 520, 590]}
      height={[250, 250, 280, 320, 350, 378]}
    />
  </Flex>
)

export default CustomPolicies
