import React from 'react'
import styled from 'styled-components'
import { Box, P } from 'serverless-design-system/src'
import NavLink from 'src/components/NavLink'

const ItemWrapper = styled(Box)`
  a:hover {
    p {
      color: white;
    }
  }
`

const ItemText = styled(P)`
  display: inline-block;
  padding-top: 5px;
`

// Renders Each item in the footer list
const FooterListItem = ({ content, color, pt }) => (
  <ItemWrapper>
    <NavLink {...content.navProps}>
      <ItemText
        color={color}
        fontFamily={'Serverless'}
        fontSize={1}
        lineHeight={1}
        letterSpacing='text'
        my={'5px'}
      >
        {content.name}
      </ItemText>
    </NavLink>
  </ItemWrapper>
)

export default FooterListItem
