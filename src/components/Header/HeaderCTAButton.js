import React from 'react'
import { SecondaryButton } from 'src/fragments/DesignSystem'
import { dashboard } from 'src/constants/newUrls'
import { ExternalLink } from 'src/fragments'

const EnterpriseSupportButton = () => (
  <ExternalLink to={dashboard} className='header-menu-item'>
    <SecondaryButton>get started free</SecondaryButton>
  </ExternalLink>
)

export default EnterpriseSupportButton
