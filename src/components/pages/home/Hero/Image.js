import React from 'react'

import { Flex, Image, Text } from 'serverless-design-system'
import tempVideo from 'src/assets/images/home/temp-video-image.png'
import styled from 'styled-components'
const Features = ['Intro', 'Develop', 'Deploy', 'Test', 'Secure', 'Monitor']

const FeatureList = styled(Flex)`
  border-bottom: 1px solid #8c8c8c;
`

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1]}
    mt={[5]}
    alignItems='center'
  >
    <FeatureList mb={67}>
      {Features.map(feature => (
        <Text
          key={feature}
          px={25}
          fontSize={18}
          lineHeight={'30px'}
          letterSpacing={'-0.28px'}
          fontFamily='SoleilBk'
        >
          {feature}
        </Text>
      ))}
    </FeatureList>
    <Image src={tempVideo} />
  </Flex>
)

export default HomeHeroImage
