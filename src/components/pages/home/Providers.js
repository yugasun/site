import React from 'react'
import { Background, Flex, Image, Text, Column } from 'serverless-design-system'
import ringBg from 'src/assets/images/home/rings-bg.svg'
import gcpLogo from 'src/assets/images/home/providers/gcp.jpg'
import awsLogo from 'src/assets/images/home/providers/aws.svg'
import kubelessLogo from 'src/assets/images/home/providers/kubeless.svg'
import cloudflareLogo from 'src/assets/images/home/providers/cloudflare.svg'
import openwhiskLogo from 'src/assets/images/home/providers/openwhisk.svg'
import azureLogo from 'src/assets/images/home/providers/azure.svg'
import styled from 'styled-components'
import { Heading } from 'src/fragments/DesignSystem'

const BackgroundWithBorder = styled(Background)`
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
`

const Providers = () => (
  <Background
    backgroundImage={`url(${ringBg})`}
    backgroundSize='contain'
    backgroundPosition='center'
    width='1146px'
    height='1146px'
  >
    <Flex>
      <BackgroundWithBorder background='white' height='158px' width='208px'>
        <Image src={awsLogo} />
      </BackgroundWithBorder>
      <BackgroundWithBorder background='white' height='158px' width='208px'>
        <Image src={gcpLogo} />
      </BackgroundWithBorder>
    </Flex>
    <Flex>
      <BackgroundWithBorder background='white' height='158px' width='208px'>
        <Image src={azureLogo} />
      </BackgroundWithBorder>
      <Column>
        <Heading.h3>With the power of choice</Heading.h3>
        <Text fontFamily='SoleilBk' color='#8c8c8c' lineHeight='30px' mx='auto'>
          Deploy to all major cloud providers
        </Text>
      </Column>
      <BackgroundWithBorder background='white' height='158px' width='208px'>
        <Image src={kubelessLogo} />
      </BackgroundWithBorder>
    </Flex>
    <Flex>
      <BackgroundWithBorder background='white' height='158px' width='208px'>
        <Image src={openwhiskLogo} />
      </BackgroundWithBorder>
      <BackgroundWithBorder background='white' height='158px' width='208px'>
        <Image src={cloudflareLogo} />
      </BackgroundWithBorder>
    </Flex>
  </Background>
)

export default Providers
