import React from 'react'
import { Flex } from 'serverless-design-system'
import cicdSettingsImage from 'src/assets/images/pages/cicd/cicd-settings.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const EasySetup = () => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={cicdSettingsImage}
      width={['100%', '100%', 380, 450, 530, 619]}
      height={['48%', '48%', 181, 215, 253, 295]}
    />
  </Flex>
)

export default EasySetup
