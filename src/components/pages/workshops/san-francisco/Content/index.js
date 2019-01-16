import React from 'react'
import { AppContainerNewest as AppContainer } from 'src/components'
import Presenter from './Presenter'
import { Flex, Image } from 'serverless-design-system'
import jared from 'src/assets/images/pages/workshops/jared.png'

const EnterpriseWorkshopContent = () => (
  <AppContainer>
    <Flex
      flexDirection={['column', 'column', 'row']}
      width={0.8}
      justifyContent='space-between'
      mx='auto'
    >
      <Image src={jared} maxHeight={280} maxWidth={280} />
      <Presenter />
    </Flex>
  </AppContainer>
)

export default EnterpriseWorkshopContent
