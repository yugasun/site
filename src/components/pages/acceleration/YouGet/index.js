import React from 'react'
import { Flex } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import Workshop from './Workshop'
import Support from './Support'
import Enterprise from './Enterprise'
import Wheels from './Wheels'
import styled from 'styled-components'

const FlexWithZIndex = styled(Flex)`
  z-index: 15;
`

const YouGet = () => (
  <Flex
    alignItems='center'
    flexDirection='column'
    pt={[136, 136, 110, 110, 170]}
  >
    <Heading.h4
      color='black'
      fontSize={[18, 18, 18, 18, 24]}
      lineHeight={['24px', '24px', '30px', '30px', '38px']}
      letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '-0.38px']}
    >
      What you get
    </Heading.h4>
    <Flex
      width={[0.8, 0.8, 0.7, 0.5, 0.4]}
      justifyContent='center'
      mb={[52, 52, 42, 42, 62]}
    >
      <P align='center' m={0} id='workshop'>
        All the training, support, and tooling you need to take Serverless into
        production.
      </P>
    </Flex>
    <Wheels />
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
