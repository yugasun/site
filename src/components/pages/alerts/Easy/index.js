import React from 'react'
import { Flex } from 'serverless-design-system'
import alertsImage from 'src/assets/images/pages/alerts/unusual-error-rate.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const PoliciesIndustryStandard = props => (
  <Flex
    pt={[140, 140, 112, 112, 162]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
    pb={[92, 92, 92, 92, 132]}
  >
    <Content />
    <Image
      src={alertsImage}
      width={['100%', '100%', 336, 432, 500, 592]}
      height={[230, 230, 250, 270, 300, 386]}
    />
  </Flex>
)

export default PoliciesIndustryStandard
