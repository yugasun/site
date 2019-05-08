import React from 'react'
import { Background, Box } from 'serverless-design-system'
import ringBg from 'src/assets/images/home/rings-bg.svg'
import { Heading } from 'src/fragments/DesignSystem'
import { AppContainerNewest as AppContainer } from 'src/components'
import Logos from './Logos'

const Providers = () => (
  <AppContainer>
    <Box mt={[150, 150, -100]}>
      <Background
        backgroundImage={`url(${ringBg})`}
        backgroundRepeat='no-repeat'
        backgroundSize={['cover', 'cover', 'cover', 'cover', 'contain']}
        backgroundPosition='center'
        width={['100%', '100%', '100%', '100%', '100%', '1146px']}
        height={['100%', '100%', '100%', '100%', '100%', '1146px']}
      >
        <Logos />
      </Background>
      <Box mb={[50, 50, 42, 42, 400]}>
        <Heading.h3 align='center'>
          A developer’s guide to going serverless
        </Heading.h3>
      </Box>
    </Box>
  </AppContainer>
)

export default Providers
