import React from 'react'
import { Box, Flex, Text, Image } from 'serverless-design-system'
import featuresData from './Data'
require('./featureTableDesktop.css')

const DesktopTable = props => (
  <Box display={['none', 'none', 'none', 'none', 'block']}>
    <Flex justifyContent='space-between'>
      {featuresData.map((feature, index) => (
        <Flex key={feature.id} flexDirection='column' alignItems='center'>
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
  </Box>
)

export default DesktopTable
