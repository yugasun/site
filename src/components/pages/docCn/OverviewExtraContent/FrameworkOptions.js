import React from 'react'
import { Flex, Background, Column, Text } from 'serverless-design-system'
import { Button } from 'src/fragments/DesignSystem'
import { WhiteButtonNew as WhiteButton } from 'src/components'
import { InternalLink } from 'src/fragments'

const ServerlessFrameworkText = ({ children }) => (
  <Text fontSize='16px' color='white' letterSpacing='0.67px' mt={(22, 22, 32)}>
    serverless framework
  </Text>
)

const FrameworkType = ({ children }) => (
  <Text fontSize='36px' color='white' letterSpacing='1.5px'>
    {children}
  </Text>
)

const FrameworkOptions = props => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    mt={['-3px', '-3px', '-3px', 0]}
  >
    <Background
      width={[1, 1, 0.5]}
      background='#fd5750'
      height={[164, 164, 184]}
    >
      <Column alignItems='center'>
        <ServerlessFrameworkText />
        <FrameworkType>open source</FrameworkType>
        <InternalLink to={'/framework/docs/getting-started/'}>
          <WhiteButton mt={22}>get started</WhiteButton>
        </InternalLink>
      </Column>
    </Background>
    <Background width={[1, 1, 0.5]} background='black' height={[164, 164, 184]}>
      <Column alignItems='center'>
        <ServerlessFrameworkText />
        <FrameworkType>enterprise</FrameworkType>
        <InternalLink to={'/enterprise/'}>
          <Button mt={22}>schedule a demo</Button>
        </InternalLink>
      </Column>
    </Background>
  </Flex>
)

export default FrameworkOptions
