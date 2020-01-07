import React from 'react'
import { Flex } from 'serverless-design-system'
import configureNotificationsImage from 'src/assets/images/pages/integrations/configure-notifications.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomPolicies = () => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={configureNotificationsImage}
      width={['100%', '100%', 380, 450, 520, 592]}
      height={[250, 250, 280, 300, 350, 392]}
    />
  </Flex>
)

export default CustomPolicies
