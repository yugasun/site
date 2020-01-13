import React from 'react'
import { Flex } from 'serverless-design-system'
import straightToCodeImage from 'src/assets/images/pages/debugging/straight-to-code.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const StraightToCode = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={straightToCodeImage}
      width={['100%', '100%', 336, 450, 520, 592]}
      height={[110, 110, 123, 170, 210, 224]}
    />
  </Flex>
)

export default StraightToCode
