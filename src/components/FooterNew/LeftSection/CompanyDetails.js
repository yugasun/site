import React from 'react'

import { Flex, Box, P, ResponsiveStack } from 'serverless-design-system'
import NavLink from 'src/components/NavLink'
import { termsOfService, privacyPolicy } from 'src/constants/urls'

// Renders Company details
const CompanyDetails = () => (
  <Box width={1}>
    <Box width={[1, 1, 1 / 2]}>
      <P fontSize={0} fontFamily={'Soleil'} lineHeight={3} opacity='0.5' m={0} color='white'>
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan,
        Poland, Nebraska &amp; Thailand
      </P>
    </Box>
    <ResponsiveStack pt={[22,22,49]} alignItems={['left', 'left', 'center']}>
      <Box width={'55%'}>
        <P m={0} fontSize={0} lineHeight={1.17} letterSpacing={'0.5px'} color='white' opacity='0.5' fontFamily='Serverless'>
          Serverless, Inc. © 2018
        </P>
      </Box>

      <Flex color='gray.3' width={1}>
        <Box>
          <NavLink to={termsOfService} crossDomain>
            <P fontSize={0} lineHeight={1.17} letterSpacing={'0.5px'} fontFamily='Serverless' color='white' opacity='0.5' mt={'6px'}>terms of service</P>
          </NavLink>
        </Box>
        <Box ml={2}>
          <NavLink to={privacyPolicy} crossDomain>
            <P fontSize={0} lineHeight={1.17} letterSpacing={'0.5px'} fontFamily='Serverless' color='white' opacity='0.5' mt={'6px'}>privacy policy</P>
          </NavLink>
        </Box>
      </Flex>
    </ResponsiveStack>
  </Box>
)

export default CompanyDetails
