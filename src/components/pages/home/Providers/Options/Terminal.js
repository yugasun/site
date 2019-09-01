import React from 'react'

import { Flex, Text } from 'serverless-design-system'
import styled from 'styled-components'

const TerminalBackground = styled(Flex)`
  background-color: white;
  width: 592px;
  height: 334px;
  border-radius: 8px;
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);

  @media screen and (max-width: 1024px) and (min-width: 420px) {
    width: 433px;
    height: 288px;
  }

  @media screen and (max-width: 419px) {
    width: 300px;
    height: 262px;
  }
`

const TerminalTextContent = styled(Flex)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.15px;
  margin-top: 32px;
  margin-left: 32px;
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

const HomeHeroImage = ({ templateName }) => (
  <TerminalBackground
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, '453px', 1, '55%']}
  >
    <TerminalTextContent flexDirection='column'>
      <Flex>
        <GrayText># Create a new Serverless Service/Project</GrayText>
      </Flex>
      <Flex>
        <PurpleText>
          $ serverless create --template &nbsp;
          {templateName} --path my-service
        </PurpleText>
      </Flex>
      <Flex>
        <GrayText># Change into the newly created directory</GrayText>
      </Flex>
      <Flex>
        <PurpleText>$ cd my-service</PurpleText>
      </Flex>
    </TerminalTextContent>
  </TerminalBackground>
)

export default HomeHeroImage
