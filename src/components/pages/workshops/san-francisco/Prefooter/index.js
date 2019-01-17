import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Absolute,
  Image,
} from 'serverless-design-system'
import { Button, Heading } from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'
import leftStaticImage from 'src/assets/images/pages/workshops/prefooterLeftAnimationStatic.png'
import rightStaticImage from 'src/assets/images/pages/workshops/prefooterRightAnimationStatic.png'
import styled from 'styled-components'

const FlexWithZIndex = styled(Flex)`
  z-index: 1;
`

const PrefooterButton = styled(Button)`
  &:hover {
    color: #fd5750;
    background-color: white;
  }
`

const BuyTickets = props => (
  <ExternalLink to='https://www.eventbrite.com/e/serverless-workshop-sf-tickets-54621470288'>
    <PrefooterButton
      height={36}
      fontSize={1}
      color={['#fd5750']}
      bg={['white']}
      {...props}
      mt={[26]}
    >
      buy tickets
    </PrefooterButton>
  </ExternalLink>
)

const BlogPrefooter = () => (
  <React.Fragment>
    <Relative top={['-366px', '-366px', '-370px']} mb='-290px' pt='100px'>
      <Absolute left='0' bottom='1' width={[152, 152, 270, 270, 316, 316]}>
        <Image src={leftStaticImage} />
      </Absolute>
      <Absolute right='0' bottom='0' width={[150, 150, 270, 270, 316, 316]}>
        <Image src={rightStaticImage} />
      </Absolute>
      <Background background={'#fd5750'} backgroundSize='cover' height='266px'>
        <ResponsiveStack justifyContent='center'>
          <FlexWithZIndex
            width={[1, 1, 0.7, 0.7, 0.7, 0.4]}
            mt={[62]}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Heading.h4
              color='white'
              align='center'
              fontSize='24px'
              line-height='32px'
              letterSpacing='-0.38px'
              px={[2, 2, 0]}
            >
              Learn more about the most widely-adopted toolkit for building
              serverless applications.
            </Heading.h4>
            <BuyTickets />
          </FlexWithZIndex>
        </ResponsiveStack>
      </Background>
    </Relative>
  </React.Fragment>
)

export default BlogPrefooter
