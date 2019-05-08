import React from 'react'

import { Flex, Image, Box } from 'serverless-design-system'
import eaLogo from 'src/assets/images/home/brands/ea.png'
import cocaColaLogo from 'src/assets/images/home/brands/cocacola.svg'
import nordstromLogo from 'src/assets/images/home/brands/nordstrom.png'
import expediaLogo from 'src/assets/images/home/brands/expedia.png'
import reutersLogo from 'src/assets/images/home/brands/reuters.png'
import { TitleWithIconNewest as TitleWithIcon } from 'src/fragments'
import { Heading } from 'src/fragments/DesignSystem'

const HomeHeroFooter = () => (
  <Box>
    <Flex
      width={[0.8, 0.8, 0.6, 0.6, 0.72, 0.6]}
      mt={['92px', '92px', '62px', '62px', '162px', '220px']}
      flexDirection='row'
    >
      <TitleWithIcon color='white'>
        Startups and Fortune 500 companies go serverless with us
      </TitleWithIcon>
    </Flex>
    <Flex
      justifyContent={['normal', 'normal', 'space-between']}
      alignItems='space-between'
      flexDirection='row'
      flexWrap='wrap'
      pt={['32px', '32px', '52px']}
      pb={[0, 0, 9]}
      maxWidth={[null, null, null, null, 800]}
      m={[null, null, 'auto']}
    >
      <Box mr={['20px', '20px', '0px']}>
        <Image src={eaLogo} width={['56px']} height={['27px']} />
      </Box>

      <Box mr={['10px', '10px', '0px']}>
        <Image src={cocaColaLogo} width={['84px']} height={['27px']} />
      </Box>

      <Box mt={['10px', '10px', '0px']}>
        <Image src={nordstromLogo} width={['115px']} height={['16px']} />
      </Box>

      <Box mt={['20px', '20px', '0px']} mr={['10px', '10px', '0px']}>
        <Image src={expediaLogo} width={['100px']} height={['28px']} />
      </Box>

      <Box mt={['20px', '20px', '0px']}>
        <Image src={reutersLogo} width={['109px']} height={['28px']} />
      </Box>
    </Flex>
  </Box>
)

export default HomeHeroFooter
