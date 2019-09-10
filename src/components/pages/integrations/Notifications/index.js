import React from 'react'
import { Flex } from 'serverless-design-system'
import configureNotificationsImage from 'src/assets/images/pages/integrations/configure-notifications.png'
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
      src={configureNotificationsImage}
      width={['100%', '100%', 336, 450, 520, 592]}
      height={[400, 400, 450, 500, 600, 392]}
    />
  </Flex>
)

export default CustomPolicies
