import React from 'react'

import {
  Background,
  Box,
  Container,
  Heading,
  ImageList,
  Flex,
  Image
} from 'serverless-design-system'

import eaLogo from 'src/assets/images/fragments/trusted-clients/ea-logo-gray.png'
import cocacolaLogo from 'src/assets/images/fragments/trusted-clients/cocacola-logo-gray.png'
import nordstromLogo from 'src/assets/images/fragments/trusted-clients/nordstrom-logo-gray.png'
import expediaLogo from 'src/assets/images/fragments/trusted-clients/expedia-logo-gray.png'
import reutersLogo from 'src/assets/images/fragments/trusted-clients/reuters-logo-gray.png'

import backgroundImage from 'src/assets/images/rectangle-19.png'

const TrustedClientList = [
  { src: eaLogo, altText: 'EA' },
  { src: cocacolaLogo, altText: 'Coca Cola' },
  { src: nordstromLogo, altText: 'NordStrom' },
  { src: expediaLogo, altText: 'Expedia' },
  { src: reutersLogo, altText: 'Reuters' },
]

const TrustedClients = () => (
  <Background backgroundImage={[`url(${backgroundImage})`]} height={['700px', '700px', '619px']}>
    <Container>
      <Box
        width={1}
        pt={[5]}
        pb={[300, 300, 12, 12]}
        px={[15, 15, 2, 6, 8]}
      >
        <Heading.h5
          align='center'
          fontFamily='SoleilBk'
          fontSize={4}
          letterSpacing='h5'
          lineHeight={0}
          mb={4}
        >
          Serverless Platform is trusted by
        </Heading.h5>
        <Flex
      justifyContent={['center', 'center', 'space-evenly']}
      alignItems='space-evenly'
      flexDirection='row'
      flexWrap='wrap'
      mb={8}
    >
    <Box mr={['20px', '20px', '0px']}>
      <Image src={eaLogo} width={['54px', '54px', '90px']} height={['26px', '26px', '44px']} />
    </Box>
    
    <Box mr={['20px', '20px', '0px']}>
    <Image src={cocacolaLogo} width={['70px', '70px', '117px']} height={['23px', '23px', '36px']}/>
    </Box>

    <Image src={nordstromLogo} width={['108px', '108px', '180px']} height={['16px', '16px', '26px']} />

    <Box mt={['20px', '20px', '0px']} mr={['20px', '20px', '0px']}>
      <Image src={expediaLogo} width={['88px', '88px', '147px']} height={['25px', '25px', '42px']}/>
    </Box>

    <Box mt={['20px', '20px', '0px']}>
      <Image src={reutersLogo} width={['96px', '96px', '160px']} height={['25px', '25px', '42px']}/>
    </Box>
    
    </Flex>
      </Box>
    </Container>
  </Background>
)

export default TrustedClients
