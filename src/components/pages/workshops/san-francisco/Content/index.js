import React from 'react'
import { AppContainerNewest as AppContainer } from 'src/components'
import Presenter from './Presenter'
import Schedule from './Schedule'

const EnterpriseWorkshopContent = () => (
  <AppContainer>
    <Presenter />
    <Schedule />
  </AppContainer>
)

export default EnterpriseWorkshopContent
