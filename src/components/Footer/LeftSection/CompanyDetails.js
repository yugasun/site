import React from 'react'

import { Flex, Box, P, ResponsiveStack } from 'serverless-design-system'
import NavLink from 'src/components/NavLink'
import { termsOfService, privacyPolicy } from 'src/constants/newUrls'

// Renders Company details
const CompanyDetails = () => (
  <Box width={1}>
    <ResponsiveStack pt={[0, 0, 0, 49]} alignItems={['left', 'left', 'center']}>
      <Box width={'55%'}>
        <P
          m={0}
          fontSize={0}
          lineHeight={1.17}
          letterSpacing={'0.5px'}
          color='white'
          opacity='0.5'
          fontFamily='Soleil'
        >
          Serverless, Inc. © 2019
        </P>
      </Box>

      <Flex color='gray.3' width={1}>
        <Box>
          <NavLink to={termsOfService} crossDomain>
            <P
              fontSize={0}
              lineHeight={1.17}
              letterSpacing={'0.5px'}
              fontFamily='Soleil'
              color='white'
              opacity='0.5'
              mt={'6px'}
            >
              terms of service
            </P>
          </NavLink>
        </Box>
        <Box ml={2}>
          <NavLink to={privacyPolicy} crossDomain>
            <P
              fontSize={0}
              lineHeight={1.17}
              letterSpacing={'0.5px'}
              fontFamily='Soleil'
              color='white'
              opacity='0.5'
              mt={'6px'}
            >
              privacy policy
            </P>
          </NavLink>
        </Box>
      </Flex>
    </ResponsiveStack>
  </Box>
)

export default CompanyDetails
