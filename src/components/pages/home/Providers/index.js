import React from 'react'
import { Background, Box } from 'serverless-design-system'
import ringBg from 'src/assets/images/home/rings-bg.svg'
import { Heading } from 'src/fragments/DesignSystem'
import { AppContainerNewest as AppContainer } from 'src/components'
import Logos from './Logos'

const Providers = () => (
  <AppContainer>
    <Box mt={[150, 150, 62, 62, -100]}>
      <Background
        backgroundImage={`url(${ringBg})`}
        backgroundRepeat='no-repeat'
        backgroundSize={['cover', 'cover', 'cover', 'contain', 'contain']}
        backgroundPosition='center'
        width={['100%', '100%', '100%', '100%', '100%', '1146px']}
        height={['100%', '100%', '100%', '100%', '1046px', '1146px']}
      >
        <Logos />
      </Background>
      <Box mb={[283, 283, 309, 309, 400]} mt={[92, 92, 92, 112, 0]}>
        <Heading.h3 align='center'>
          A developer’s guide to going serverless
        </Heading.h3>
      </Box>
    </Box>
  </AppContainer>
)

export default Providers
