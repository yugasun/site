import React from 'react'
import { push } from 'gatsby-link'
import { Logo } from 'serverless-design-system'
import logo from 'src/assets/images/blog-logo.svg'
import { InternalLink } from 'src/fragments'
import { resources } from 'src/constants/urls'
const LogoComponent = () => (
  <InternalLink to={resources.blog}>
    <Logo
      src={logo}
      height={['20px', '20px', '20px', '30px']}
      width={['150px', '150px', '150px', '170px']}
      alt='Serverless Blog'
    />
  </InternalLink>
)

export default LogoComponent
