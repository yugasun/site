import React from 'react'

import { Flex, Image, Text, Box } from 'serverless-design-system'
import awsLogo from 'src/assets/images/aws-logo-grey.svg'
import kubernetesLogo from 'src/assets/images/kubernetes-logo-grey.svg'
import googleCloudLogo from 'src/assets/images/google-cloud-logo-grey.png'
import azureLogo from 'src/assets/images/azure-logo-grey.svg'

const HomeHeroFooter = () => (
  <Box>
    <Flex
      width={[1, 1, 0.45]}
      mt={[4, 4, 0, 0, '113px', '69px']}
      flexDirection='row'
    >
      <Text
        color='white'
        fontSize={[18]}
        mt={['170px', '170px', '122px', '140px', '180px', '220px']}
        mb={[0, 0, '10px', '10px', '15px']}
        lineHeight={['24px']}
        fontFamily='SoleilBk'
        letterSpacing={['-0.28px']}
      >
        Start ups and Fortune 500 companies go serverless with us
      </Text>
    </Flex>
    <Flex
      justifyContent={['center', 'center', 'space-between']}
      alignItems='space-between'
      flexDirection='row'
      flexWrap='wrap'
      pt={['32px', '32px', '52px']}
      pb={[0, 0, 9]}
      maxWidth={[null, null, null, null, 800]}
      m={[null, null, 'auto']}
    >
      <Box mr={['20px', '20px', '0px']}>
        <Image
          src={awsLogo}
          width={['48px', '48px', '48px', '48px', '63.8px']}
          height={['29px', '29px', '29px', '29px', '38px']}
        />
      </Box>

      <Image
        src={azureLogo}
        width={['100px', '100px', '100px', '100px', '131.5px']}
        height={['29px', '29px', '29px', '29px', '38px']}
      />

      <Box mt={['20px', '20px', '0px']} mr={['10px', '10px', '0px']}>
        <Image
          src={googleCloudLogo}
          width={['199px', '199px', '199px', '199px', '262.6px']}
          height={['24px', '24px', '24px', '24px', '31px']}
        />
      </Box>

      <Box mt={['20px', '20px', '0px']}>
        <Image
          src={kubernetesLogo}
          width={['113px', '113px', '113px', '113px', '146px']}
          height={['26px', '26px', '26px', '26px', '31px']}
        />
      </Box>
    </Flex>
  </Box>
)

export default HomeHeroFooter
