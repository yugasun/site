import React from 'react'

import { Box, P } from 'serverless-design-system'
import FooterListItem from './Item'
import styled from 'styled-components'
import { InternalLink } from 'src/fragments'

const BoxWithMobileMargin = styled(Box)`
  @media screen and (max-width: 414px) {
    :nth-child(odd) {
      margin-right: 48px;
    }
  }
`

// Renders each column in the footer list
const FooterListColumn = ({ header, headerLink, listItems }) => (
  <BoxWithMobileMargin width={['123px', '123px', '106px']} mr={[0, 0, '22px']}>
    <P
      color={'white'}
      fontFamily={'Serverless'}
      fontSize={1}
      lineHeight={1.14}
      letterSpacing='0.6px'
      my={'5px'}
      py={1}
    >
      {headerLink ? (
        <InternalLink to={headerLink} className='footer-menu-item'>
          {' '}
          {header}{' '}
        </InternalLink>
      ) : (
        header
      )}
    </P>
    <Box>
      {listItems.map((listItem, index) => (
        <FooterListItem key={index} color='white' content={listItem} />
      ))}
    </Box>
  </BoxWithMobileMargin>
)

export default FooterListColumn
