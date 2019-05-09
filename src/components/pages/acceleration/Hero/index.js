import React from 'react'
import { Background, Text, Flex, Box } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import heroBg from 'src/assets/images/acceleration/sap-hero-bg.svg'
import { AppContainerNewest as AppContainer } from 'src/components'
import Points from './Points'

const Hero = () => (
  <Flex>
    <Background
      background='white'
      width={'100vw'}
      height={'972px'}
      backgroundImage={`url(${heroBg})`}
      backgroundRepeat='no-repeat'
    >
      <AppContainer>
        <Flex mt={13} alignItems='center' flexDirection='column'>
          <Box width={[0.5]}>
            <Text
              fontSize={[40, 40, 48]}
              lineHeight={['50px', '50px', '62px', '62px', '62px']}
              fontFamily='Soleil'
              align='center'
            >
              Serverless Acceleration Program
            </Text>
          </Box>
          <Text
            fontFamily='SoleilBk'
            fontSize={'18px'}
            align='center'
            lineHeight={'30px'}
            letterSpacing={'-0.28px'}
            mt={22}
          >
            Everything you need to take Serverless in to produciton.
          </Text>
          <Button mt={22}>get in touch</Button>
          <Points />
        </Flex>
      </AppContainer>
    </Background>
  </Flex>
)

export default Hero
