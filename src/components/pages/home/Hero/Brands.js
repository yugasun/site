import React from 'react'
import { AppContainer } from 'src/components'
import { Flex, Image, Box } from 'serverless-design-system'
import eaLogo from 'src/assets/images/home/brands/ea.png'
import cocaColaLogo from 'src/assets/images/home/brands/cocacola.svg'
import nordstromLogo from 'src/assets/images/home/brands/nordstrom.png'
import expediaLogo from 'src/assets/images/home/brands/expedia.png'
import reutersLogo from 'src/assets/images/home/brands/reuters.png'
import { Heading } from 'src/fragments/DesignSystem'

const HomeHeroFooter = () => (
  <AppContainer>
    <Flex
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
      ]}
      alignItems={['auto', 'auto', 'auto', 'center', 'auto']}
    >
      <Flex
        justifyContent={['normal', 'normal', 'space-between']}
        alignItems='space-between'
        flexDirection='row'
        flexWrap='wrap'
        pt={['32px', '32px', '52px']}
        maxWidth={[null, null, null, null, 800]}
        m={[null, null, 'auto']}
      >
        <Box mr={['20px', '20px', '32px']}>
          <Image src={eaLogo} width={['56px']} height={['27px']} />
        </Box>

        <Box mr={['10px', '10px', '42px', '10px', '16px', '32px']}>
          <Image src={cocaColaLogo} width={['84px']} height={['27px']} />
        </Box>

        <Box
          mt={['10px', '10px', '6px']}
          mr={['10px', '10px', '42px', '10px', '16px', '32px']}
        >
          <Image src={nordstromLogo} width={['115px']} height={['16px']} />
        </Box>

        <Box
          mt={['20px', '20px', '0px']}
          mr={['10px', '10px', '42px', '10px', '16px', '32px']}
        >
          <Image src={expediaLogo} width={['100px']} height={['28px']} />
        </Box>

        <Box
          mt={['20px', '20px', '0px']}
          mr={['10px', '10px', '42px', '10px', '16px', '32px']}
        >
          <Image src={reutersLogo} width={['109px']} height={['28px']} />
        </Box>
      </Flex>
      <Flex width={[1, 1, 0.8, 0.5, 0.41, 0.4]} flexDirection='row'>
        <Heading.h4
          fontSize={['18px', '18px', '24px']}
          lineHeight={['30px', '30px', '38px']}
          letterSpacing={['-0.28px', '-0.28px', '-0.38px']}
          align='left'
          color='#000'
          pt={[92, 92, 62, 62, 50]}
        >
          Startups and Fortune 500 companies go serverless with the Serverless
          Framework
        </Heading.h4>
      </Flex>
    </Flex>
  </AppContainer>
)

export default HomeHeroFooter
