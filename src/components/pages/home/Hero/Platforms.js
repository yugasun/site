import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { Flex, Image, InlineBlock, Heading, ImageList, Box } from 'serverless-design-system'
import awsLogo from 'src/assets/images/aws-logo-grey.svg'
import kubernetesLogo from 'src/assets/images/kubernetes-logo-grey.svg'
import googleCloudLogo from 'src/assets/images/google-cloud-logo-grey.png'
import azureLogo from 'src/assets/images/azure-logo-grey.svg'

const StyledLink = styled(Link)`
  text-decoration: none;
`

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
        mt={6}
        mx={1}
        mb={1}
        lineHeight={[3, 3, 0]}
        align='center'
        fontFamily='Soleil'
      >
        Supports these serverless backends
      </Heading.h4>
    </Flex.center>
    <Flex
      justifyContent={['center', 'center', 'space-evenly']}
      alignItems='space-evenly'
      flexDirection='row'
      flexWrap='wrap'
      mb={[0, 0, 8]}
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
  </StyledLink>
)

export default HomeHeroFooter