import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Flex, Image, InlineBlock, Heading, ImageList } from 'serverless-design-system'
import awsLogo from 'src/assets/images/aws-logo-grey.svg'
import kubernetesLogo from 'src/assets/images/kubernetes-logo-grey.svg'
import googleCloudLogo from 'src/assets/images/google-cloud-logo-grey.png'
import azureLogo from 'src/assets/images/azure-logo-grey.svg'

const StyledLink = styled(Link)`
  text-decoration: none;
`
const SupportedPlatforms = [
    { src: awsLogo, altText: 'AWS Lambda' },
    { src: azureLogo, altText: 'Azure Functions' },
    { src: googleCloudLogo, altText: 'Google Cloud Functions' },
    { src: kubernetesLogo, altText: 'Kubernetes' },
  ]

const HomeHeroFooter = () => (
  <StyledLink to='/overview-video'>
    <Flex.center
      width={[1, 1, 3 / 4]}
      my={[2, 4, 5]}
      mx={'auto'}
      flexDirection='row'
    >
      <Heading.h4
        color='white'
        fontSize={[4, 4, 4]}
        mt={5}
        mx={1}
        mb={0}
        lineHeight={[3, 3, 0]}
        align='center'
        fontFamily='Soleil'
      >
        Supports these serverless backends
      </Heading.h4>
    </Flex.center>
    <Flex
      justifyContent='center'
      alignItems='space-evenly'
      flexDirection='row'
      flexWrap='wrap'
      mb={2}
    >
      <Image src={awsLogo} />
      <Image src={azureLogo} />
      <Image src={googleCloudLogo} width='331px' height='41px' />
      <Image src={kubernetesLogo} />
    </Flex>
  </StyledLink>
)

export default HomeHeroFooter