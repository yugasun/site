import React from 'react'

import { Flex, Text } from 'serverless-design-system'
import styled from 'styled-components'

const TerminalBackground = styled(Flex)`
  background-color: white;
  width: 592px;
  height: 380px;
  border-radius: 8px;
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);

  position: absolute;
  right: 400px;
  margin-top: -140px;
  margin-right: -200px;

  @media screen and (max-width: 1024px) and (min-width: 420px) {
    width: 433px;
    height: 288px;
  }

  @media screen and (max-width: 419px) {
    width: 300px;
    height: 196px;
  }
`

const TerminalTextContent = styled(Flex)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.15px;
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

const HomeHeroImage = ({ createCommand }) => (
  <TerminalBackground
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, '453px', 1, '55%']}
  >
    <TerminalTextContent flexDirection='column'>
      <Flex>
        <GrayText>1</GrayText> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <PurpleText>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {createCommand}</PurpleText>
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
  </TerminalBackground>
)

export default HomeHeroImage
