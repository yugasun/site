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

const PointButton = ({ children, anchorLink }) => (
  <a href={'#' + anchorLink}>
    <Button
      bg='#fd5750'
      width={['36px']}
      height={['36px']}
      fontSize={['16px']}
      letterSpacing={['-0.25px']}
      p={0}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </Button>
  </a>
)

const PointText = ({ children }) => (
  <a href={'#' + children.toLowerCase()}>
    <Box width={[160, 160, 'auto']} mr={[0, 0, 57, 57, 62]}>
      <Heading.h5 color='black' ml={[36, 36, 22, 22, 36]} mt={['12px']}>
        {children}
      </Heading.h5>
    </Box>
  </a>
)

const Points = () => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    justifyContent='space-between'
    mt={62}
    mb={[102, 102, 132]}
    ml={[45, 45, 30]}
    alignItems={['space-between', 'space-between', 'auto']}
  >
    {pointsData.map((point, index) => (
      <Flex.verticallyCenter mb={[22, 22, 0]} key={index}>
        <PointButton anchorLink={point.titleText.toLowerCase()}>
          {point.buttonText}
        </PointButton>
        <PointText>{point.titleText}</PointText>
      </Flex.verticallyCenter>
    ))}
  </Flex>
)

export default Points
