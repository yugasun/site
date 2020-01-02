import React from 'react'
import Link from 'gatsby-link'

import { Logo } from 'serverless-design-system'

const LogoWithDesktopTopMargin = styled(Logo)`
  @media screen and (min-width: 1200px) {
    margin-top: 6px;
  }
`

const LogoComponent = () => (
  <DropDown
    options={[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' }
    ]}
  >
  </DropDown>
)

export default LogoComponent
