import React from 'react'

import { Box, P, Flex } from 'serverless-design-system'
import FooterListItem from './Item'
import { InternalLink } from 'src/fragments'

// Renders each column in the footer list
const FooterListColumn = ({ header, headerLink, listItems, mobileOrder }) => (
  <Flex
    mr={[0, 0, 39]}
    order={[mobileOrder, mobileOrder, 'initial']}
    flexDirection='column'
    width={[0.5, 0.5, 'auto']}
  >
    <P
      color={'white'}
      fontFamily={'Soleil'}
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
  </Flex>
)

export default FooterListColumn
