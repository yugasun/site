import React from 'react'

import {
  Flex,
  Box,
  P,
  ResponsiveStack,
  Image
} from 'serverless-design-system'

import google from 'src/assets/images/cloud-google.svg'
import azure from 'src/assets/images/cloud-azure.svg'
import aws from 'src/assets/images/cloud-aws.svg'
import ibm from 'src/assets/images/cloud-ibm.svg'
import kubernetes from 'src/assets/images/cloud-kubernetes.svg'

const CloudProviders = () => (
  <Box>
    <Box px={[0, 0, 15]} width={1} mt={[4, 4, 4, 4, 5]}>
      <Flex.verticallyCenter flexDirection='column'>
        <Box>
          <P
            fontSize={'18px'}
            color='white'
            lineHeight={'24px'}
            letterSpacing='-0.28px'
            mb={0}
          >
            Supports Top Cloud Providers
          </P>
        </Box>
        <ResponsiveStack.verticallyCenter
          justifyContent='space-between'
          width={1}
          px='5%'
          py='2%'
          boxSizing='border-box'
        >
      <Flex
        justifyContent={['center', 'center', 'space-between']}
        flexDirection='row'
        flexWrap='wrap'
        pt={['32px','32px', '52px']}
        pb={[3, 3, 9]}
        m={[null, null, 'auto']}
      >
      <Box mr={['30px', '30px', '11px', '11px', '40px', '80px']}>
      <Image src={google} width={['166px', '166px', '166px', '166px', '200px']} height={['21px', '21px', '21px', '21px', '25px']} />
      </Box>

      <Box mt={['20px', '20px', '0px']} mr={['0px', '0px', '11px', '11px', '40px', '80px']}>
      <Image src={azure} width={['83px', '83px', '83px', '83px', '100px']} height={['24px', '24px', '24px', '24px', '29px']}/>
      </Box>

      <Box mt={['20px', '20px', '0px']} px={['10px', '10px', 0]} mr={['0px', '0px', '11px', '11px', '40px', '80px']}>
        <Image src={aws} width={['42px', '42px', '42px', '42px', '50px']} height={['25px', '25px', '25px', '25px', '30px']} />
      </Box>

      <Box mt={['20px', '20px', '0px']} mr={['0px', '0px', '11px', '11px', '50px', '80px']}>
        <Image src={ibm} width={['116px', '116px', '116px', '116px', '140px']} height={['27px', '27px', '27px', '27px', '32px']}/>
      </Box>
      <Box mt={['20px', '20px', '0px']}>
        <Image src={kubernetes} width={['125px', '125px', '125px', '125px', '150px']} height={['21px', '21px', '21px', '21px', '25px']}/>
      </Box>
      </Flex>
        </ResponsiveStack.verticallyCenter>
      </Flex.verticallyCenter>
    </Box>
  </Box>
)

export default CloudProviders
