import React from 'react'

import {
  Flex,
  Image,
  Position,
  Background,
  Relative,
  Absolute,
  Text,
} from 'serverless-design-system'
import TerminalBgImage from 'src/assets/images/pages/framework/terminal-graphics.svg'
import styled from 'styled-components'
import TerminalImage from 'src/assets/images/pages/framework/terminal-light.svg'

const TerminalBackground = styled(Relative)`
  @media screen and (max-width: 340px) {
    margin-left: -27px;
  }
  @media screen and (min-width: 370px) and (max-width: 380px) {
    margin-left: 0px;
  }
  @media screen and (min-width: 410px) and (max-width: 420px) {
    margin-left: 2px;
    width: 350px;
  }
`

const TerminalText = styled(Absolute)`
  @media screen and (max-width: 340px) {
    margin-left: 6px;
  }
  @media screen and (min-width: 370px) and (max-width: 380px) {
    margin-left: 38px;
  }
  @media screen and (min-width: 410px) and (max-width: 420px) {
    margin-left: 1px;
  }
`

const TerminalTextContent = styled(Text.p)`
  @media screen and (min-width: 410px) and (max-width: 420px) {
    font-size: 11px;
  }
`

const BackgroundWithBigScreenCoverage = styled(Background)`
  @media screen and (min-width: 1920px) {
    width: 826px;
  }

  @media screen and (min-width: 2220px) {
    width: 1026px;
  }
`

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 1, 1, '55%']}
    mt={[5]}
  >
    <Position
      zIndex='5'
      left={[null, null, null, '16.4%', '0']}
      position={['relative', 'relative', 'absolute']}
    >
      <BackgroundWithBigScreenCoverage
        width={['auto', 'auto', '680px', '680px', '580px', '680px']}
        height={['auto', 'auto', '680px', '680px', '580px', '680px']}
        backgroundImage={`url(${TerminalBgImage})`}
        backgroundRepeat='no-repeat'
        backgroundSize='contain'
        backgroundPosition='center'
      >
        <Flex flexDirection='column' alignItems='center'>
          <Flex
            flexDirection='column'
            alignItems='center'
            mt={['10%', '10%', '20%']}
          >
            <TerminalBackground width={['280px', '320px', 1]}>
              <Image src={TerminalImage} />
            </TerminalBackground>
            <TerminalText mt={['92px', '92px', '102px']}>
              <TerminalTextContent
                color='#727679'
                fontSize={['10px', '10px', '13.7px']}
                letterSpacing='0.1px'
              >
                # Step 1. Install serverless globally
                <br />
                <Text.span color='#000'>$ npm install serverless -g</Text.span>
                <br /> <br /># Step 2. Create a serverless function
                <br />
                <Text.span color='#000'>
                  $ serverless create --template hello-world
                </Text.span>
                <br />
                <br /># Step 3. deploy to cloud provider
                <br />
                <Text.span color='#000'>$ serverless deploy</Text.span>
                <br />
                <br /># Your function is deployed!
                <br />
                <Text.span color='#000'>
                  $ http://xyz.amazonaws.com/hello-world
                </Text.span>
              </TerminalTextContent>
            </TerminalText>
          </Flex>
        </Flex>
      </BackgroundWithBigScreenCoverage>
    </Position>
  </Flex>
)

export default HomeHeroImage
