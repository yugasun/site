import React from 'react'

import { Flex, Image, Text, Box } from 'serverless-design-system'
import eaLogo from 'src/assets/images/home/brands/ea.png'
import cocaColaLogo from 'src/assets/images/home/brands/cocacola.svg'
import nordstromLogo from 'src/assets/images/home/brands/nordstrom.png'
import expediaLogo from 'src/assets/images/home/brands/expedia.png'
import reutersLogo from 'src/assets/images/home/brands/reuters.png'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import { Heading } from 'src/fragments/DesignSystem'

const HomeHeroFooter = () => (
  <Box>
    <Flex
      width={[1, 1, 0.6]}
      mt={[4, 4, 0, 0, '113px', '69px']}
      flexDirection='row'
    >
      <TitleWithIcon
        color='white'
        headingComponent={Heading.h4}
        mt={['170px', '170px', '122px', '140px', '180px', '150px']}
      >
        Startups and Fortune 500 companies go serverless with us
      </TitleWithIcon>
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
          src={eaLogo}
          width={['48px', '48px', '48px', '48px', '56px']}
          height={['29px', '29px', '29px', '29px', '27px']}
        />
      </Box>

      <Image
        src={cocaColaLogo}
        width={['100px', '100px', '100px', '100px', '84px']}
        height={['29px', '29px', '29px', '29px', '27px']}
      />

      <Box mt={['20px', '20px', '0px']} mr={['10px', '10px', '0px']}>
        <Image
          src={nordstromLogo}
          width={['199px', '199px', '199px', '199px', '115px']}
          height={['24px', '24px', '24px', '24px', '16px']}
        />
      </Box>

      <Box mt={['20px', '20px', '0px']} mr={['10px', '10px', '0px']}>
        <Image
          src={expediaLogo}
          width={['199px', '199px', '199px', '199px', '100px']}
          height={['24px', '24px', '24px', '24px', '28px']}
        />
      </Box>

      <Box mt={['20px', '20px', '0px']}>
        <Image
          src={reutersLogo}
          width={['113px', '113px', '113px', '113px', '109px']}
          height={['26px', '26px', '26px', '26px', '28px']}
        />
      </Box>
    </Flex>
  </Box>
)

export default HomeHeroFooter
