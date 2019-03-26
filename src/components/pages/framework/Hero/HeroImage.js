import React from 'react'
import { Flex, Image, Text } from 'serverless-design-system'
import starIcon from 'src/assets/images/star-gray.svg'
import styled from 'styled-components'

const HeroImage = () => (
  <Flex
    py={[1, 1, 3]}
    height={['100%']}
    justifyContent='center'
    mt={['-30px', '-30px', 0]}
  >
    <Image
      src={starIcon}
      height={[11, 15, 20]}
      width={[11, 15, 20]}
      maxWidth='none'
    />
    <Text.span fontSize={[12, 12, 12, 12, 16]} color='#8c8c8c'>
      &nbsp; 29k GitHub stars
    </Text.span>
  </Flex>
)

export default HeroImage
