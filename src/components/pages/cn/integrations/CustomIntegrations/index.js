import React from 'react'
import { Flex } from 'serverless-design-system'
import customIntegrationsImage from 'src/assets/images/pages/integrations/custom-integrations.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const CustomIntegrations = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={customIntegrationsImage}
      width={['100%', '100%', 350, 400, 430, 487]}
      height={[200, 200, 230, 250, 280, 302]}
    />
  </Flex>
)

export default CustomIntegrations
