import React from 'react'
import { Button } from 'src/fragments/DesignSystem'
import { dashboard } from 'src/constants/urls'
import { ExternalLink } from 'src/fragments'

const HeaderCTAButton = () => (
  <ExternalLink to={dashboard} className='header-menu-item'>
    <Button width={109}>sign-up free</Button>
  </ExternalLink>
)

export default HeaderCTAButton
