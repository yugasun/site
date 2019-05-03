import React from 'react'
import { Background, Flex, Image } from 'serverless-design-system'
import ringBg from 'src/assets/images/home/rings-bg.svg'
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
  </Background>
)

export default Providers
