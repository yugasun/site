import React from 'react'
import { Flex } from 'serverless-design-system'
import forTeamsImage from 'src/assets/images/pages/dashboard/for-teams.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomPolicies = props => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={forTeamsImage}
      width={['100%', '100%', 380, 450, 550, 592]}
      height={[300, 300, 380, 442, 480, 508]}
    />
  </Flex>
)

export default CustomPolicies
