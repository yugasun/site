import React from 'react'
import { Flex, Image, Box, Text } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import Headline from './Headline'

import FeaturesData from './Data'

const SingleFeature = ({ feature, itemNo }) => (
  <Flex
    width={0.5}
    flexDirection={['column', 'column', 'column', 'column', 'row']}
    mt={itemNo == 3 || itemNo == 4 ? [0, 0, 0, 0, 32] : [0]}
  >
    <Flex
      justifyContent={'center'}
      ml={itemNo == 2 || itemNo == 4 ? [0, 0, 0, 0, 100] : [0]}
    >
      <Image src={feature.imageUrl} />
    </Flex>
    <Flex
      flexDirection='column'
      ml={[0, 0, 0, 0, 32]}
      width={[1, 1, 1, 1, 0.65]}
      justifyContent={['center', 'center', 'center', 'center', 'left']}
    >
      <Text
        color='#fff'
        fontSize={'24px'}
        lineHeight={'38px'}
        letterSpacing={'-0.38px'}
        fontFamily='Soleil'
        align={['center', 'center', 'center', 'center', 'left']}
      >
        {feature.title}
      </Text>
      <P
        color='#8c8c8c'
        align={['center', 'center', 'center', 'center', 'left']}
      >
        {feature.description}
      </P>
    </Flex>
  </Flex>
)

const Features = () => (
  <Box pt={[500, 500, 420, 420, 240, 180]}>
    <Headline />
    <Flex justifyContent={['space-between']} flexWrap='wrap'>
      <SingleFeature feature={FeaturesData[0]} itemNo={1} />
      <SingleFeature feature={FeaturesData[1]} itemNo={2} />
      <SingleFeature feature={FeaturesData[2]} itemNo={3} />
      <SingleFeature feature={FeaturesData[3]} itemNo={4} />
    </Flex>
  </Box>
)

export default Features
