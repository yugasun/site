import React from 'react'
import { Flex } from 'serverless-design-system'
import noFirehosesImage from 'src/assets/images/pages/alerts/no-firehoses.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const AllSignal = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={noFirehosesImage}
      width={['100%', '100%', 370, 436, 500, 594]}
      height={[290, 290, 300, 300, 300, 354]}
    />
  </Flex>
)

export default AllSignal
