import React from 'react'
import { Flex, Box, Button, Row } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

//TODO: map instead

const PointButton = ({ children }) => (
  <Button
    bg='#fd5750'
    width={['42px', '42px', '42px', '42px', '72px']}
    height={['42px', '42px', '42px', '42px', '72px']}
    fontSize={['18.7px', '18.7px', '18.7px', '18.7px', '32px']}
    letterSpacing={['-0.29px', '-0.29px', '-0.29px', '-0.29px', '-0.5px']}
    p={0}
  >
    {children}
  </Button>
)

const PointText = ({ children }) => (
  <Box width={[160, 160, 'auto']}>
    <Heading.h5
      color='white'
      ml={['16px', '16px', '14px', '14px', 32]}
      mt={[0, 0, 0, 0, 32]}
    >
      {children}
    </Heading.h5>
  </Box>
)

const Points = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    justifyContent='space-evenly'
    mt={62}
    mb={[132]}
    alignItems={['center', 'center', 'auto']}
    id='enterprise-contact-form'
  >
    <Row mb={[35, 35, 0]}>
      <PointButton>01</PointButton>
      <PointText>Start fast</PointText>
    </Row>

    <Row mb={[35, 35, 0]}>
      <PointButton>02</PointButton>
      <PointText>Scale easily</PointText>
    </Row>

    <Row mb={[35, 35, 0]}>
      <PointButton>03</PointButton>
      <PointText>Run efficiently</PointText>
    </Row>
  </Flex>
)

export default Points
