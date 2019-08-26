import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { InternalLink } from 'src/fragments'

const StyledLink = styled(Link)`
  font-family: 'Soleil';
`
export default function BreadcrumbItem({
  getUrlFromPathSegments,
  pathSegments,
  label,
}) {
  return (
    <InternalLink to={getUrlFromPathSegments(pathSegments)}>
      {label}
    </InternalLink>
  )
}
