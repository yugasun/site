import React from 'react'
import { Flex } from 'serverless-design-system'
import singlePaneImage from 'src/assets/images/pages/dashboard/single-pane.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const SinglePane = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={singlePaneImage}
      width={['100%', '100%', 385, 432, 500, 543]}
      height={[250, 250, 270, 285, 310, 337]}
    />
  </Flex>
)

export default SinglePane
