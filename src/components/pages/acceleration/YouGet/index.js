import React from 'react'
import { Flex } from 'serverless-design-system'
import TitleWithIcon from '../TitleWithIcon'
import { P } from 'src/fragments/DesignSystem'
import Workshop from './Workshop'
import Support from './Support'
import Enterprise from './Enterprise'
import Wheels from './Wheels'
import styled from 'styled-components'

const FlexWithZIndex = styled(Flex)`
  z-index: 3;
`

const YouGet = () => (
  <Flex
    alignItems='center'
    flexDirection='column'
    pt={[136, 136, 136, 136, 196]}
  >
    <TitleWithIcon>What you get</TitleWithIcon>
    <Flex
      width={[0.8, 0.8, 0.7, 0.5, 0.4]}
      justifyContent='center'
      mb={[52, 52, 42, 42, 62]}
    >
      <P align='center' m={0}>
        All the training, support, and tooling you need to take Serverless in to
        production.
      </P>
    </Flex>

    <FlexWithZIndex>
      <Workshop />
    </FlexWithZIndex>
    <FlexWithZIndex
      mt={42}
      flexDirection={['column', 'column', 'row', 'row', 'row']}
      mb={[132, 132, 132, 132, 192]}
    >
      <Support />
      <Enterprise />
    </FlexWithZIndex>
  </Flex>
)

export default YouGet
