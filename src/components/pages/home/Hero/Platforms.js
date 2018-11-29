import React from 'react'

import { Flex, Image, Text, Box } from 'serverless-design-system'
import awsLogo from 'src/assets/images/aws-logo-grey.svg'
import kubernetesLogo from 'src/assets/images/kubernetes-logo-grey.svg'
import googleCloudLogo from 'src/assets/images/google-cloud-logo-grey.png'
import azureLogo from 'src/assets/images/azure-logo-grey.svg'

const HomeHeroFooter = () => (
  <Box>
    <Flex.center
      width={[1, 1, 3 / 4]}
      mt={[4, 4, 0, 0, 8]}
      mx={'auto'}
      flexDirection='row'
    >
      <Text
        color='white'
        fontSize={[18, 18, 18, 18, 32]}
        mt={['47px','110px', '72px', '72px', '150px']}
        lineHeight={['24px', '24px', '24px', '24px', '44px']}
        align='center'
        fontFamily='SoleilBk'
        letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '-0.5px']}
      >
        Supports these serverless backends
      </Text>
    </Flex.center>
    <Flex
      justifyContent={['center', 'center', 'space-evenly']}
      alignItems='space-evenly'
      flexDirection='row'
      flexWrap='wrap'
      mt={['32px','32px', '52px']}
      mb={[0, 0, 9]}
    >
    <Box mr={['20px', '20px', '0px']}>
      <Image src={awsLogo} width={['48px', '48px', '48px', '48px', '81px']} height={['29px', '29px', '29px', '29px', '48px']} />
    </Box>
    
    <Image src={azureLogo} width={['100px', '100px', '100px', '100px', '166px']} height={['29px', '29px', '29px', '29px', '48px']}/>
    
    <Box mt={['20px', '20px', '0px']} mr={['10px', '10px', '0px']}>
      <Image src={googleCloudLogo} width={['199px', '199px', '199px', '199px', '331px']} height={['24px', '24px', '24px', '24px', '41px']} />
    </Box>

    <Box mt={['20px', '20px', '0px']}>
      <Image src={kubernetesLogo} width={['113px', '113px', '113px', '113px', '186px']} height={['26px', '26px', '26px', '26px', '40px']}/>
    </Box>
    </Flex>
    </Box>
)

export default HomeHeroFooter