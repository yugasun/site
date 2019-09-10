import React from 'react'
import { Flex } from 'serverless-design-system'
import allSignalImage from 'src/assets/images/pages/monitoring/all-signal-monitoring.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const AllSignal = props => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={allSignalImage}
      width={['100%', '100%', 370, 436, 500, 594]}
      height={[280, 280, 280, 320, 350, 401]}
    />
  </Flex>
)

export default AllSignal
