import React from 'react'
import { Relative, Absolute, Image, Flex, Text } from 'serverless-design-system'
import homepageHeroTerminal from 'src/assets/images/homepageHeroTerminal.svg'
import styled from 'styled-components'

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

const Terminal = () => {
  return (
    <Flex
      flexDirection={['column']}
      mb={[1, 1, 4]}
      alignItems={['auto', 'auto', 'center', 'center', 'auto']}
    >
      <TerminalBackground width={['280px', '320px', '416px']}>
        <Image src={homepageHeroTerminal} />
      </TerminalBackground>
      <TerminalText mt={['40px']}>
        <TerminalTextContent
          color='#727679'
          fontSize={['10px', '10px', '13.7px']}
          letterSpacing='0.1px'
        >
          &nbsp;1 &nbsp;&nbsp;# Step 1. Install serverless globally
          <br />
          &nbsp;2 &nbsp;&nbsp;
          <Text.span color='#fff'>$ npm install serverless -g</Text.span>
          <br />
          &nbsp;3
          <br />
          &nbsp;4 &nbsp;&nbsp;# Step 2. Create a service
          <br />
          &nbsp;5 &nbsp;&nbsp;
          <Text.span color='#fff'>$ serverless</Text.span>
          <br />
          &nbsp;6 <br />
          &nbsp;7 &nbsp;&nbsp;# Step 3. deploy to cloud provider
          <br />
          &nbsp;8 &nbsp;&nbsp;
          <Text.span color='#fff'>$ serverless deploy</Text.span>
          <br />
          &nbsp;9
          <br />
          10 &nbsp;&nbsp;# Your service is deployed!
          <br />
          11 &nbsp;&nbsp;
          <Text.span color='#fff'>
            $ http://xyz.amazonaws.com/hello-world
          </Text.span>
        </TerminalTextContent>
      </TerminalText>
    </Flex>
  )
}

export default Terminal
