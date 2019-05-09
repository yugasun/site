import React from 'react'
import { Image } from 'serverless-design-system'
import { Flex, Box } from 'serverless-design-system'
import awsPartnerLogo from 'src/assets/images/acceleration/aws-tech-partner-logo.svg'
import boozAllenLogo from 'src/assets/images/acceleration/booz-allen-hamilton-logo.png'
import eaLogo from 'src/assets/images/acceleration/ea-logo.png'
import cavaliersLogo from 'src/assets/images/acceleration/cavaliers-logo.png'
import cocacolaLogo from 'src/assets/images/acceleration/cocacola-logo.svg'
import nikeLogo from 'src/assets/images/acceleration/nike-logo.svg'
import nordstromLogo from 'src/assets/images/acceleration/nordstrom-logo.png'

const Logos = () => (
  <Flex justifyContent='center'>
    <Box mr={42}>
      <Image src={awsPartnerLogo} />
    </Box>
    <Flex flexDirection='column'>
      <Flex>
        <Box mr={42}>
          <Image
            src={eaLogo}
            width={[47, 47, 76, 76, 90]}
            height={[23, 23, 37, 37, 44]}
          />
        </Box>
        <Box mr={42}>
          <Image
            src={cavaliersLogo}
            width={[65, 65, 104, 104, 124]}
            height={[44, 44, 71, 71, 84]}
          />
        </Box>
        <Image
          src={boozAllenLogo}
          width={[144, 144, 232, 232, 276]}
          height={[24, 24, 38, 38, 45]}
        />
      </Flex>
      <Flex mt={32}>
        <Box mr={42}>
          <Image
            src={cocacolaLogo}
            width={[61, 61, 99, 99, 117]}
            height={[20, 20, 32, 32, 38]}
          />
        </Box>
        <Box mr={42}>
          <Image
            src={nikeLogo}
            width={[65, 65, 105, 105, 125]}
            height={[23, 23, 37, 37, 44]}
          />
        </Box>
        <Image
          src={nordstromLogo}
          width={[93, 93, 151, 151, 179]}
          height={[14, 14, 22, 22, 26]}
        />
      </Flex>
    </Flex>
  </Flex>
)

export default Logos
