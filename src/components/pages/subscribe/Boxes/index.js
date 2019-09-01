import React from 'react'
import { Flex, Relative } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { AppContainer } from 'src/components'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const SubscribeBoxes = () => (
  <Relative height='470px' pt={['0', '0', '10vh', '10vh', '25vh', '27vh']}>
    <AppContainer>
      <Flex
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        alignItems={['center']}
      >
        <LeftColumn />
        <RightColumn />
      </Flex>
      <P color='#5b5b5b' ml={[0, 0, 70, 90, 0]} mt={[4, 4, 2]} mb={[8, 8, 0]}>
        Don’t worry. You can unsubscribe whenever you want.
      </P>
    </AppContainer>
  </Relative>
)

export default SubscribeBoxes
