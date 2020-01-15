import React from 'react'
import { Image, Flex } from 'serverless-design-system'
import simplicityImage from 'src/assets/images/pages/cn/plugins/open-source-support.png'
import Content from './Content'

const PoliciesIndustryStandard = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      marginTop='-50px'
      src={simplicityImage}
      width={['100%', '100%', 370, 432, 560, 592]}
    />
  </Flex>
)

export default PoliciesIndustryStandard
