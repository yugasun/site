import React from 'react'
import { Flex } from 'serverless-design-system'
import noMoreCloudWatchImage from 'src/assets/images/pages/debugging/no-more-cloudwatch.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const NoMoreCloudWatch = props => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={noMoreCloudWatchImage}
      width={['100%', '100%', 336, 436, 592]}
      height={[110, 110, 123, 170, 160, 180]}
    />
  </Flex>
)

export default NoMoreCloudWatch
