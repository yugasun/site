import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import agnosticImage from 'src/assets/images/pages/components/vendor-agnostic.png'
import Content from './Content'

const AllSignal = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={agnosticImage}
      width={['100%', '100%', 400, 550, 600, 725]}
      height={[270, 270, 300, 350, 400, 459]}
    />
  </Flex>
)

export default AllSignal
