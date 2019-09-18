import React from 'react'
import { Flex } from 'serverless-design-system'
import invocationsExplorerImage from 'src/assets/images/pages/debugging/invocations-explorer.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const InvocationsExplorer = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={invocationsExplorerImage}
      width={['100%', '100%', 336, 432, 500, 592]}
      height={[235, 235, 262, 285, 443, 463]}
    />
  </Flex>
)

export default InvocationsExplorer
