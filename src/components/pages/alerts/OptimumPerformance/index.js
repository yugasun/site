import React from 'react'
import { Flex } from 'serverless-design-system'
import optimumPerformance from 'src/assets/images/pages/alerts/optimum-performance.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const PoliciesIndustryStandard = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={optimumPerformance}
      width={['100%', '100%', 336, 432, 500, 592]}
      height={[400, 400, 400, 450, 600, 670]}
    />
  </Flex>
)

export default PoliciesIndustryStandard
