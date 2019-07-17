import React from 'react'

import { Flex, Text, Box } from 'serverless-design-system'
import styled from 'styled-components'

const TerminalBackground = styled(Flex)`
  background-color: white;
  border-radius: 8px;
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  position: absolute;
  right: 400px;

  @media screen and (min-width: 1800px) {
    margin-right: -100px;
  }

  @media screen and (min-width: 1350px) and (max-width: 1439px) {
    width: 513px;
    height: 420px;
    margin-top: -130px;
    margin-right: -260px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1350px) {
    width: 493px;
    height: 420px;
    margin-top: -130px;
    margin-right: -270px;
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    right: 0px;
    margin-left: 20px;
  }

  @media screen and (max-width: 415px) {
    margin-left: 0px;
  }
`

const TerminalTextContent = styled(Flex)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.15px;
  margin-left: 32px;
  margin-top: 32px;

  @media screen and (min-width: 750px) and (max-width: 1024px) {
    margin-left: 12px;
  }

  @media screen and (max-width: 420px) {
    margin-left: 12px;
    font-size: 11px;
  }
`

const PurpleText = styled(Text)`
  color: #795da3;
  overflow: hidden;
`

const GrayText = ({ children }) => (
  <Box mr={[1, 1, 3]}>
    <Text color='#9b9b9b'>{children}</Text>
  </Box>
)
const HomeHeroImage = ({ createCommand }) => (
  <TerminalBackground
    flexDirection={['column', 'column', 'column']}
    width={['100%', '100%', '333px', '433px', '513px', '592px']}
    height={['260px', '260px', '318px', '288px', '400px', '380px']}
    mr={[0, 0, 0, 0, '-240px', '-200px']}
    mt={[0, 0, '-50px', '-50px', '-130px', '-140px']}
  >
    <TerminalTextContent flexDirection='column'>
      <Flex>
        <GrayText>1</GrayText>
        <b>Step #1</b> &nbsp;-&nbsp;{' '}
        <PurpleText> npm install serverless -g</PurpleText>
      </Flex>
      <Flex>
        <GrayText>2</GrayText> &nbsp;&nbsp;&nbsp;&nbsp;
      </Flex>
      <Flex>
        <GrayText>3</GrayText>
        <GrayText># Create a new Serverless Service/Project</GrayText>
      </Flex>
      <Flex>
        <GrayText>4</GrayText>
        <PurpleText>$ {createCommand}</PurpleText>
      </Flex>
      <Flex>
        <GrayText>5</GrayText>
        <GrayText># Change into the newly created directory</GrayText>
      </Flex>
      <Flex>
        <GrayText>6</GrayText>
        <PurpleText>$ cd my-service</PurpleText>
      </Flex>
    </TerminalTextContent>
  </TerminalBackground>
)

export default HomeHeroImage
