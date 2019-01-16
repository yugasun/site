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
import leftStaticImage from 'src/assets/images/pages/workshops/prefooterLeftAnimationStatic.svg'
import prefooterAnimation from 'src/assets/images/pages/workshops/prefooterAnimation.svg'

const BuyTickets = props => (
  <ExternalLink to='https://www.eventbrite.com/e/serverless-workshop-sf-tickets-54621470288'>
    <Button
      height={36}
      fontSize={1}
      color={['white', 'white', 'white', 'white', '#fd5750']}
      bg={['#fd5750', '#fd5750', '#fd5750', '#fd5750', 'white']}
      {...props}
    >
      buy tickets
    </Button>
  </ExternalLink>
)

const BlogPrefooter = () => (
  <React.Fragment>
    <Relative top='-370px' mb='-290px' pt='100px'>
      <Absolute right='0' bottom='0' width={[0, 0, 0, 0, '316px', '316px']}>
        <Image src={leftStaticImage} />
      </Absolute>
      <Absolute left='0' bottom='0' width={[0, 0, 0, 0, '316px', '316px']}>
        <Image src={prefooterAnimation} />
      </Absolute>
      <Background background={'#fd5750'} backgroundSize='cover'>
        <ResponsiveStack justifyContent='center'>
          <Flex
            width={[1, 1, 0.7, 0.7, 0.7, 0.6]}
            p={[1, 1, 5, 7]}
            pr={2}
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Heading.h4 color='white' align='center'>
              Learn more about the most widely-adopted toolkit for building
              serverless applications.
            </Heading.h4>
            <BuyTickets />
          </Flex>
        </ResponsiveStack>
      </Background>
    </Relative>
  </React.Fragment>
)

export default BlogPrefooter
