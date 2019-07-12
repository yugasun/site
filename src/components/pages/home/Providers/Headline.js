import React from 'react'
import { Flex, Background, Column, Text } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import styled from 'styled-components'
require('./Logos.css')

const BackgroundWithBorder = styled(Background)`
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoBackground = ({ children }) => (
  <BackgroundWithBorder
    background='white'
    height={[95, 95, 126, 126, 158]}
    width={[125, 125, 166, 166, 208]}
    className={'provider-card-bg'}
  >
    {children}
  </BackgroundWithBorder>
)

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
