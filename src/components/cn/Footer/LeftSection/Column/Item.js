import React from 'react'
import styled from 'styled-components'
import { Box, P } from 'serverless-design-system'
import NavLink from 'src/components/NavLink'

const ItemWrapper = styled(Box)`
  a:hover {
    p {
      opacity: 0.6;
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
    <NavLink {...content.navProps} className='footer-menu-item'>
      <ItemText
        color={color}
        opacity={1}
        fontFamily={'SoleilBk'}
        fontSize={'14px'}
        lineHeight={'24px'}
        letterSpacing='text'
        my={0}
      >
        {content.name}
      </ItemText>
    </NavLink>
  </ItemWrapper>
)

export default FooterListItem
