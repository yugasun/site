import React from 'react'
import { Background, ThemeProvider } from 'serverless-design-system'

import { Helmet, ExternalLink, InternalLink } from 'src/fragments'
import DefaultLayout from 'src/layouts/DefaultNewest'
import { Flex, Text, Box } from 'serverless-design-system'
import { P0 } from 'src/fragments/DesignSystem'
import { HeroButton } from 'src/components'
import { dashboard, homepage } from 'src/constants/urls'

const NotFoundPage = () => (
  <ThemeProvider>
    <DefaultLayout transparentHeader={true} noFooter={true}>
      <Helmet title='404 - Page not found' />
      <Background
        background={[
          'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
          'linear-gradient(150deg,rgb(0,0,0) 50%,#70221f)',
          `linear-gradient(132deg,rgb(0,0,0) 62%,#70221f)`,
        ]}
        height={['100vh']}
      >
        <Flex
          flexDirection={['column']}
          color='white'
          alignItems='center'
          pt={['40%', '40%', '40%', '25%', '18%']}
          width={1}
        >
          <Box width={[1, 1, 0.5, 0.5, 0.25, 0.2]}>
            <Text
              fontSize='32px'
              lineHeight='44px'
              letterSpacing='-0.5px'
              fontFamily='Soleil'
              align='center'
            >
              Get started with the Serverless Framework
            </Text>
            <P0 color='white' align='center' mt={22}>
              The complete solution for building and operating serverless
              applications
            </P0>
            <Flex justifyContent='center' mt={62}>
              <ExternalLink to={dashboard}>
                <HeroButton style={{ alignSelf: 'center' }}>
                  Sign-up for free
                </HeroButton>
              </ExternalLink>
            </Flex>
            <P0 color='white' align='center' mt={22}>
              …or get more info{' '}
              <InternalLink to={homepage} underline>
                here
              </InternalLink>
              .
            </P0>
          </Box>
        </Flex>
      </Background>
    </DefaultLayout>
  </ThemeProvider>
)

export default NotFoundPage
