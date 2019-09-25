import React from 'react'
import { Flex, Image, Box } from 'serverless-design-system'
import eaLogo from 'src/assets/images/home/brands/ea.png'
import cocaColaLogo from 'src/assets/images/home/brands/cocacola.svg'
import nordstromLogo from 'src/assets/images/home/brands/nordstrom.png'
import expediaLogo from 'src/assets/images/home/brands/expedia.png'
import reutersLogo from 'src/assets/images/home/brands/reuters.png'
import { Heading } from 'src/fragments/DesignSystem'

const Brands = props => (
  <React.Fragment>
    <Heading.h3
      color='black'
      align='center'
      mb={[0, 0, 0, 0, '10px']}
      mt={[92, 92, 92, 92, 132]}
    >
      Companies who trust us
    </Heading.h3>
    <Flex
      justifyContent={['normal', 'normal', 'space-evenly']}
      alignItems='space-between'
      flexDirection='row'
      flexWrap='wrap'
      pt={['32px', '32px', '52px']}
      m={[null, null, 'auto']}
      pb={[92, 92, 92, 92, 132]}
    >
      <Box mr={[3, 3, 0]}>
        <Image
          src={eaLogo}
          width={[53, 53, 65, 65, 95]}
          height={[25, 25, 31, 31, 46, 46]}
        />
      </Box>

      <Box mr={[3, 3, 0]}>
        <Image
          src={cocaColaLogo}
          width={[79, 79, 97, 97, 143]}
          height={[25, 25, 31, 31, 46, 46]}
        />
      </Box>

      <Box mt={['10px', '10px', '6px']}>
        <Image
          src={nordstromLogo}
          width={[108, 108, 133, 133, 195]}
          height={['14px', '14px', 18, 18, 27, 27]}
        />
      </Box>

      <Box mt={['20px', '20px', '0px']} mx={[4, 4, 0]}>
        <Image
          src={expediaLogo}
          width={[95, 95, 117, 117, 172]}
          height={[26, 26, 32, 32, 47, 47]}
        />
      </Box>

      <Box mt={['20px', '20px', '0px']}>
        <Image
          src={reutersLogo}
          width={[104, 104, 127, 127, 187]}
          height={[26, 26, 32, 32, 47, 47]}
        />
      </Box>
    </Flex>
  </React.Fragment>
)

export default Brands
