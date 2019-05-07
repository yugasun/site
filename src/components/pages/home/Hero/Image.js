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
import homepageHeroPlaceholder from 'src/assets/images/home/hero-placeholder.png'
import ringBg from 'src/assets/images/home/rings-bg.svg'
import styled from 'styled-components'
import { P } from 'src/fragments/DesignSystem'
import homepageHeroTerminal from 'src/assets/images/homepageHeroTerminal.svg'

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
    margin-left: 40px;
  }
`

const TerminalTextContent = styled(Text.p)`
  @media screen and (min-width: 410px) and (max-width: 420px) {
    font-size: 11px;
  }
`

const HomeHeroImage = () => (
  <Flex
    flexDirection={['column', 'column', 'column']}
    width={[1, 1, 1, 1, '55%']}
    mt={5}
  >
    <Position zIndex='5' left='0' position='absolute'>
      <Background
        width={['500px', '500px', '500px', '500px', '600px', '680px']}
        height={['600px', '500px', '500px', '500px', '600px', '680px']}
        background='#EAEAEA'
        backgroundImage={`url(${ringBg})`}
        backgroundRepeat='no-repeat'
        backgroundSize='contain'
        backgroundPosition='center'
      >
        <Flex flexDirection='column' alignItems='center'>
          <Flex flexDirection='column' alignItems='center' mt='20%'>
            <P align='left' mr={'220px'} mb={0} pt={1}>
              Get started in 3 steps
            </P>
            <TerminalBackground width={['280px', '320px', '320px', '320px', 1]}>
              <Image src={homepageHeroTerminal} />
            </TerminalBackground>
            <TerminalText
              ml={['1px', '25px', '90px', '135px', '0px']}
              mt={['128px', '128px', '165px', '120px', '102px']}
            >
              <TerminalTextContent
                color='#727679'
                fontSize={['10px', '10px', '9.8px', '9.8px', '13.7px']}
                letterSpacing='0.1px'
              >
                1 &nbsp;&nbsp;&nbsp;&nbsp;# Step 1. Install serverless globally
                <br />2 &nbsp;&nbsp;&nbsp;&nbsp;
                <Text.span color='#fff'>$ npm install serverless -g</Text.span>
                <br />3<br />4 &nbsp;&nbsp;&nbsp;&nbsp;# Step 2. Create a
                serverless function
                <br />5 &nbsp;&nbsp;&nbsp;&nbsp;
                <Text.span color='#fff'>
                  $ serverless create --template hello-world
                </Text.span>
                <br />6 <br />7 &nbsp;&nbsp;&nbsp;&nbsp;# Step 3. deploy to
                cloud provider
                <br />8 &nbsp;&nbsp;&nbsp;&nbsp;
                <Text.span color='#fff'>$ serverless deploy</Text.span>
                <br />9<br />
                10 &nbsp;&nbsp;# Your function is deployed!
                <br />
                11 &nbsp;&nbsp;
                <Text.span color='#fff'>
                  $ http://xyz.amazonaws.com/hello-world
                </Text.span>
              </TerminalTextContent>
            </TerminalText>
          </Flex>
        </Flex>
      </Background>
    </Position>
  </Flex>
)

export default HomeHeroImage
