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
      width={['100%', '100%', 370, 436, 500, 487]}
      height={[290, 290, 300, 300, 300, 302]}
    />
  </Flex>
)

export default CustomIntegrations
