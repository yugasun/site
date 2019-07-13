import React from 'react'

import { Flex, Text } from 'serverless-design-system'
import styled from 'styled-components'

const TerminalBackground = styled(Flex)`
  background-color: white;
  width: 592px;
  height: 334px;
  border-radius: 8px;
`

const TerminalTextContent = styled(Text.p)`
  margin-left: 32px;
  margin-top: 32px;
  @media screen and (min-width: 410px) and (max-width: 420px) {
    font-size: 11px;
  }
`

const PurpleText = styled(Text)`
  color: #795da3;
`

const GrayText = styled(Text)`
  color: #9b9b9b;
`

const HomeHeroImage = () => (
  <TerminalBackground
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 1, 1, '55%']}
  >
    <Flex flexDirection='column'>
      <TerminalTextContent
        color='#727679'
        fontSize={['10px', '10px', '13.7px']}
        letterSpacing='0.1px'
      >
        <Flex>
          <GrayText>1</GrayText> &nbsp;&nbsp;&nbsp;&nbsp;
          <b>Step #1</b> &nbsp;-&nbsp;{' '}
          <PurpleText> npm install serverless -g</PurpleText>
        </Flex>
        <Flex>
          <GrayText>2</GrayText> &nbsp;&nbsp;&nbsp;&nbsp;
        </Flex>
        <Flex>
          <GrayText>3</GrayText>
          <GrayText>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Create a new Serverless
            Service/Project
          </GrayText>
        </Flex>
        <Flex>
          <GrayText>4</GrayText>
          <PurpleText>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ serverless create --template
            aws-nodejs --path my-service
          </PurpleText>
        </Flex>
        <Flex>
          <GrayText>5</GrayText>
          <GrayText>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Change into the newly created
            directory
          </GrayText>
        </Flex>
        <Flex>
          <GrayText>6</GrayText>
          <PurpleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ cd my-service</PurpleText>
        </Flex>
      </TerminalTextContent>
    </Flex>
  </TerminalBackground>
)

export default HomeHeroImage
