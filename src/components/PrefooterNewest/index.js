import React from 'react'
import styled from 'styled-components'

import {
  Background,
  Box,
  Flex,
  Overflow,
  Relative,
  Absolute,
  ResponsiveStack,
} from 'serverless-design-system'

import NavLink from './NavLink'
import { Heading, Button, P } from 'src/fragments/DesignSystem'
import prefooterLeftImage from 'src/assets/images/prefooter-new-left.svg'
import prefooterRightImage from 'src/assets/images/prefooter-new-right.svg'

const OverflowWithTextCenter = styled(Overflow)`
  text-align: center;
`

const LeftColumn = ({ heading, sentences, actions }) => (
  <Background background='white' width={[1]}>
    <Absolute
      left='-2px'
      bottom='0'
      display={['none', 'none', 'none', 'none', 'block']}
    >
      <Background
        backgroundImage={`url(${prefooterLeftImage})`}
        backgroundRepeat='no-repeat'
        height={268}
        width={390}
      />
    </Absolute>
    <Absolute right='0' bottom='-87px'>
      <Background
        backgroundImage={`url(${prefooterRightImage})`}
        backgroundRepeat='no-repeat'
        height={[450, 450, 465, 465, 475]}
        width={[450, 450, 450, 450, 485]}
      />
    </Absolute>
    <Flex.horizontallyCenter
      width={1}
      boxSizing='border-box'
      flexDirection='column'
      height='100%'
      mx='auto'
    >
      <OverflowWithTextCenter
        o='hidden'
        width={1}
        pb={[62, 62, 110, 110, 7]}
        pt={[0, 0, 0, 0, 5]}
        px={[3, 3, 6]}
      >
        <Heading.h3
          color='black'
          fontFamily={'Soleil'}
          fontSize={5}
          letterSpacing={'-0.5px'}
          lineHeight={1.38}
        >
          {heading}
        </Heading.h3>

        <Flex width={[1, 1, 1, 0.5, 0.5, 0.3]} mx='auto' flexDirection='column'>
          {sentences.map(
            (sentence, index) =>
              typeof sentence === 'string' ? (
                <P color='black' mt={0} key={index}>
                  {sentence}
                </P>
              ) : (
                <React.Fragment key={index}>{sentence}</React.Fragment>
              )
          )}
        </Flex>
        <Flex
          justifyContent='center'
          flexDirection={['column', 'column', 'row']}
          mt={[3, 3, 5]}
        >
          {actions.map(({ name, navProps }, index) => (
            <Box key={index} mx={[0, 0, '10px']} my={[1, 1, 0]}>
              <NavLink {...navProps}>
                <Button>{name}</Button>
              </NavLink>
            </Box>
          ))}
        </Flex>
      </OverflowWithTextCenter>
    </Flex.horizontallyCenter>
  </Background>
)

const Prefooter = ({ heading, sentences, actions, prefooterHeight }) => (
  <Relative height={prefooterHeight ? prefooterHeight : '445px'} mt={28}>
    <ResponsiveStack bg='white' o='hidden' height='100%'>
      <LeftColumn heading={heading} sentences={sentences} actions={actions} />
    </ResponsiveStack>
  </Relative>
)

export default Prefooter
