import React from 'react'

import { Box, P } from 'serverless-design-system'
import FooterListItem from './Item'
import styled from 'styled-components'

const BoxWithMobileMargin = styled(Box) `
  @media screen and (max-width: 414px) {
    :nth-child(odd) {
      margin-right: 48px;
    }
  }
`

// Renders each column in the footer list
const FooterListColumn = ({ header, listItems }) => (
  <BoxWithMobileMargin width={['123px', '123px', '140px']} mb={[2, 2, 0]} mr={[0,0,'16px']}>
    <P
      color={'white'}
      fontFamily={'Serverless'}
      fontSize={1}
      lineHeight={1.14}
      letterSpacing='0.6px'
      my={'5px'}
      py={1}
    >
      {header}
    </P>
    <Box>
      {listItems.map((listItem, index) => (
        <FooterListItem key={index} color='white' content={listItem} />
      ))}
    </Box>
  </BoxWithMobileMargin>
)

export default FooterListColumn
