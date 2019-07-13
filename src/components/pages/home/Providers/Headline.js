import React from 'react'
import { Flex, Column, Text } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
require('./Logos.css')

const Logos = () => (
  <Flex pt={[0, 0, 50, 50, 162]} justifyContent='center'>
    <Column mt={[5, 5, 0]} mb={[3, 3, 0]}>
      <Heading.h3 align={['center', 'center', 'center']}>
        With the power of choice
      </Heading.h3>
      <Text
        fontFamily='SoleilBk'
        color='#8c8c8c'
        lineHeight='30px'
        mx='auto'
        align={['center', 'center', 'auto']}
      >
        Deploy to all major cloud providers
      </Text>
    </Column>
  </Flex>
)

export default Logos
