import React from 'react'
import { Flex } from 'serverless-design-system'
import monitorImage from 'src/assets/images/pages/monitoring/monitor-aws-lambda.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const PoliciesIndustryStandard = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={monitorImage}
      width={['100%', '100%', 336, 432, 500, 592]}
      height={[200, 200, 235, 270, 300, 329]}
    />
  </Flex>
)

export default PoliciesIndustryStandard
