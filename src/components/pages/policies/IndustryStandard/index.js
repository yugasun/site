import React from 'react'
import { Flex, Image } from 'serverless-design-system'
import { Heading, P0 } from 'src/fragments/DesignSystem'
import industryStandardImage from 'src/assets/images/pages/policies/industry-standard.jpg'
import Content from './Content'

const PoliciesIndustryStandard = props => (
  <Flex
    pt={92}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={industryStandardImage}
      width={[300, 300, 336, 432, 500, 592]}
      height={[235, 235, 262, 285, 443, 463]}
    />
  </Flex>
)

export default PoliciesIndustryStandard
