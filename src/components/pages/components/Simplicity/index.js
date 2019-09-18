import React from 'react'
import { Flex } from 'serverless-design-system'
import simplicityImage from 'src/assets/images/pages/components/simplicity.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const PoliciesIndustryStandard = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Image
      src={simplicityImage}
      width={['100%', '100%', 370, 432, 560, 592]}
      height={[120, 120, 120, 120, 131, 131]}
    />
  </Flex>
)

export default PoliciesIndustryStandard
