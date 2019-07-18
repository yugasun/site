import React from 'react'
import { Flex, Text, Image } from 'serverless-design-system'
import featuresData from './Data'

const DesktopTable = props => (
  <Flex
    justifyContent={['center', 'center', 'space-between']}
    flexWrap={['wrap', 'wrap', 'auto']}
  >
    {featuresData.map((feature, index) => (
      <Flex
        key={feature.id}
        flexDirection='column'
        alignItems='center'
        width={[0.5, 0.5, 'auto']}
        mt={index > 1 ? [42, 42, 0] : [22, 22, 0]}
      >
        <Image src={feature.image} />
        <Text
          fontSize='24px'
          lineHeight='38px'
          letterSpacing='-0.38px'
          fontFamily='Soleil'
          mt={'14px'}
          mb={'22px'}
        >
          {feature.heading}
        </Text>
        {feature.features.map(subFeature => (
          <Text
            key={subFeature}
            fontSize='16px'
            lineHeight='26px'
            letterSpacing='0'
            fontFamily='SoleilBk'
            color='#8c8c8c'
          >
            {subFeature}
          </Text>
        ))}
      </Flex>
    ))}
  </Flex>
)

export default DesktopTable
