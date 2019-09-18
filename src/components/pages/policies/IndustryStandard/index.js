import React from 'react'
import { Flex } from 'serverless-design-system'
import industryStandardImage from 'src/assets/images/pages/policies/industry-standard.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const PoliciesIndustryStandard = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={industryStandardImage}
      width={['100%', '100%', 336, 432, 500, 592]}
      height={[235, 235, 262, 285, 443, 463]}
    />
  </Flex>
)

export default PoliciesIndustryStandard
