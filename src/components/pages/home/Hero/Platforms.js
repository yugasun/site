import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Flex, Image, InlineBlock, Heading, ImageList, Box } from 'serverless-design-system'
import awsLogo from 'src/assets/images/aws-logo-grey.svg'
import kubernetesLogo from 'src/assets/images/kubernetes-logo-grey.svg'
import googleCloudLogo from 'src/assets/images/google-cloud-logo-grey.png'
import azureLogo from 'src/assets/images/azure-logo-grey.svg'

const HomeHeroFooter = () => (
  <Box>
    <Flex.center
      width={[1, 1, 3 / 4]}
      mt={[4, 4, 8]}
      mx={'auto'}
      flexDirection='row'
    >
      <Heading.h4
        color='white'
        fontSize={[24, 24, 32]}
        mt={['47px','47px','110px']}
        mx={1}
        lineHeight={[3, 3, '44px']}
        align='center'
        fontFamily='Soleil'
        letterSpacing={['-0.4px', '-0.4px', '-0.5px']}
      >
        Supports these serverless backends
      </Heading.h4>
    </Flex.center>
    <Flex
      justifyContent={['center', 'center', 'space-evenly']}
      alignItems='space-evenly'
      flexDirection='row'
      flexWrap='wrap'
      mt={['20px','20px', '52px']}
      mb={[0, 0, 9]}
    >
    <Box mr={['20px', '20px', '0px']}>
      <Image src={awsLogo} width={['48px', '48px', '81px']} height={['29px', '29px', '48px']} />
    </Box>
    
    <Image src={azureLogo} width={['100px', '100px', '166px']} height={['29px', '29px', '48px']}/>
    
    <Box mt={['20px', '20px', '0px']}>
      <Image src={googleCloudLogo} width={['199px', '199px', '331px']} height={['24px', '24px', '41px']} />
    </Box>

    <Box mt={['20px', '20px', '0px']}>
      <Image src={kubernetesLogo} width={['111px', '111px', '186px']} height={['26px', '26px', '40px']}/>
    </Box>
    </Flex>
    </Box>
)

export default HomeHeroFooter