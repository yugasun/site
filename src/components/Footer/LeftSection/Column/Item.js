import React from 'react'
import styled from 'styled-components'
import { Box, P } from 'serverless-design-system'
import NavLink from 'src/components/NavLink'

const ItemWrapper = styled(Box)`
  a:hover {
    p {
      opacity: 1;
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
        opacity={ content.defaultOpacity ? 1 : 0.5 }
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
