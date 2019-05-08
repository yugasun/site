import React from 'react'
import {
  Flex,
  Background,
  Box,
  Image,
  Column,
  Text,
} from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import gcpLogo from 'src/assets/images/home/providers/gcp.jpg'
import awsLogo from 'src/assets/images/home/providers/aws.svg'
import kubelessLogo from 'src/assets/images/home/providers/kubeless.svg'
import cloudflareLogo from 'src/assets/images/home/providers/cloudflare.svg'
import openwhiskLogo from 'src/assets/images/home/providers/openwhisk.svg'
import azureLogo from 'src/assets/images/home/providers/azure.svg'
import styled from 'styled-components'
const BackgroundWithBorder = styled(Background)`
  box-shadow: 2px 7px 18px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoBackground = ({ children }) => (
  <BackgroundWithBorder
    background='white'
    height={[95, 95, 126, 126, 158]}
    width={[125, 125, 166, 166, 208]}
  >
    {children}
  </BackgroundWithBorder>
)

const Logos = () => (
  <React.Fragment>
    <Flex pt={[0, 0, 150, 150, 180, 260]}>
      <Box ml={[20, 20, 100, 100, 180, 280]}>
        <LogoBackground>
          <Image
            src={awsLogo}
            width={[50, 50, 67, 67, 84]}
            height={[29, 29, 40, 40, 50]}
          />
        </LogoBackground>
      </Box>
      <Box ml={[20, 20, 200, 200, 360]} mt={[100, 100, 100, 100, 40, 100]}>
        <LogoBackground>
          <Image
            src={gcpLogo}
            width={[88, 88, 117, 117, 147]}
            height={[51, 51, 68, 68, 86]}
          />
        </LogoBackground>
      </Box>
    </Flex>
    <Flex
      justifyContent='space-between'
      flexDirection={['column', 'column', 'row']}
    >
      <LogoBackground>
        <Image
          src={azureLogo}
          width={[75, 75, 100, 100, 125]}
          height={[22, 22, 30, 30, 37]}
        />
      </LogoBackground>
      <Column>
        <Heading.h3>With the power of choice</Heading.h3>
        <Text fontFamily='SoleilBk' color='#8c8c8c' lineHeight='30px' mx='auto'>
          Deploy to all major cloud providers
        </Text>
      </Column>
      <Box mt={53}>
        <LogoBackground>
          <Image
            src={kubelessLogo}
            width={[85, 85, 112, 112, 141]}
            height={[20, 20, 26, 26, 32]}
          />
        </LogoBackground>
      </Box>
    </Flex>
    <Flex>
      <Box ml={[20, 20, 150, 150, 280]}>
        <LogoBackground>
          <Image
            src={openwhiskLogo}
            width={[92, 92, 122, 122, 153]}
            height={[20, 20, 24, 24, 31]}
          />
        </LogoBackground>
      </Box>
      <Box ml={[20, 20, 100, 100, 322]} mt={53}>
        <LogoBackground>
          <Image
            src={cloudflareLogo}
            width={[84, 84, 112, 112, 140]}
            height={[29, 29, 38, 38, 47]}
          />
        </LogoBackground>
      </Box>
    </Flex>
  </React.Fragment>
)

export default Logos
