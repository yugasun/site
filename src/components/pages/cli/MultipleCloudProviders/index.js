import React from 'react'
import { Background, Flex } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import MultipleCloudVendorImage from 'src/assets/images/pages/cli/multiple-cloud-vendors.png'

const MultipleCloudProviders = props => (
  <Background
    background={`url(${MultipleCloudVendorImage})`}
    backgroundSize='cover'
    backgroundPosition='center'
    width={['100%', '100%', '100%', '100%', '800px', '1026px']}
    height={['400px', '400px', '800px', '800px', '800px', '1026px']}
    style={{ margin: '0 auto' }}
  >
    <Flex justifyContent='center' alignItems='center' height='100%'>
      <Heading.h3 align='center'>Deploy to multiple cloud providers</Heading.h3>
    </Flex>
  </Background>
)

export default MultipleCloudProviders
