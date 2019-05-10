import React from 'react'
import { Flex, Box, Button, Row } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'

const pointsData = [
  {
    buttonText: '01',
    titleText: 'Workshop',
  },
  {
    buttonText: '02',
    titleText: 'Support',
  },
  {
    buttonText: '03',
    titleText: 'Tooling',
  },
]

const PointButton = ({ children }) => (
  <Button
    bg='#fd5750'
    width={['36px']}
    height={['36px']}
    fontSize={['16px']}
    letterSpacing={['-0.25px']}
    p={0}
  >
    {children}
  </Button>
)

const PointText = ({ children }) => (
  <Box width={[160, 160, 'auto']} mr={[0, 0, 57, 57, 62]}>
    <Heading.h5 color='black' ml={[36, 36, 22, 22, 36]} mt={['12px']}>
      {children}
    </Heading.h5>
  </Box>
)

const Points = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    justifyContent='space-evenly'
    mt={62}
    mb={[102, 102, 132]}
    alignItems={['center', 'center', 'auto']}
    id='enterprise-contact-form'
  >
    {pointsData.map((point, index) => (
      <Flex.verticallyCenter mb={[35, 35, 0]} key={index}>
        <PointButton>{point.buttonText}</PointButton>
        <PointText>{point.titleText}</PointText>
      </Flex.verticallyCenter>
    ))}
  </Flex>
)

export default Points
