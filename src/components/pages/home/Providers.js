import React from 'react'
import {
  Background,
  Flex,
  Image,
  Text,
  Column,
  Box,
} from 'serverless-design-system'
import ringBg from 'src/assets/images/home/rings-bg.svg'
import gcpLogo from 'src/assets/images/home/providers/gcp.jpg'
import awsLogo from 'src/assets/images/home/providers/aws.svg'
import kubelessLogo from 'src/assets/images/home/providers/kubeless.svg'
import cloudflareLogo from 'src/assets/images/home/providers/cloudflare.svg'
import openwhiskLogo from 'src/assets/images/home/providers/openwhisk.svg'
import azureLogo from 'src/assets/images/home/providers/azure.svg'
import styled from 'styled-components'
import { Heading } from 'src/fragments/DesignSystem'
import { AppContainerNewest as AppContainer } from 'src/components'

const BackgroundWithBorder = styled(Background)`
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Providers = () => (
  <AppContainer>
    <Box mt={-100}>
      <Background
        backgroundImage={`url(${ringBg})`}
        backgroundRepeat='no-repeat'
        backgroundSize='contain'
        backgroundPosition='center'
        width={['100%', '100%', '100%', '100%', '1146px']}
        height={['100%', '100%', '100%', '100%', '1146px']}
      >
        <Flex pt={260}>
          <Box ml={280}>
            <BackgroundWithBorder
              background='white'
              height='158px'
              width='208px'
            >
              <Image src={awsLogo} width={84} height={50} />
            </BackgroundWithBorder>
          </Box>
          <Box ml={380} mt={100}>
            <BackgroundWithBorder
              background='white'
              height='158px'
              width='208px'
            >
              <Image src={gcpLogo} width={147} height={86} />
            </BackgroundWithBorder>
          </Box>
        </Flex>
        <Flex justifyContent='space-between'>
          <BackgroundWithBorder background='white' height='158px' width='208px'>
            <Image src={azureLogo} width={125} height={37} />
          </BackgroundWithBorder>
          <Column>
            <Heading.h3>With the power of choice</Heading.h3>
            <Text
              fontFamily='SoleilBk'
              color='#8c8c8c'
              lineHeight='30px'
              mx='auto'
            >
              Deploy to all major cloud providers
            </Text>
          </Column>
          <Box mt={53}>
            <BackgroundWithBorder
              background='white'
              height='158px'
              width='208px'
            >
              <Image src={kubelessLogo} width={141} height={32} />
            </BackgroundWithBorder>
          </Box>
        </Flex>
        <Flex>
          <Box ml={280}>
            <BackgroundWithBorder
              background='white'
              height='158px'
              width='208px'
            >
              <Image src={openwhiskLogo} width={153} height={31} />
            </BackgroundWithBorder>
          </Box>
          <Box ml={322} mt={53}>
            <BackgroundWithBorder
              background='white'
              height='158px'
              width='208px'
            >
              <Image src={cloudflareLogo} width={140} height={47} />
            </BackgroundWithBorder>
          </Box>
        </Flex>
      </Background>
      <Box mb={[50, 50, 42, 42, 400]}>
        <Heading.h3 align='center'>
          A developer’s guide to going serverless
        </Heading.h3>
      </Box>
    </Box>
  </AppContainer>
)

export default Providers
