import React from 'react'

import { Box, P, Flex } from 'serverless-design-system'
import FooterListItem from './Item'
import { InternalLink } from 'src/fragments'

// Renders each column in the footer list
const FooterListColumn = ({ header, headerLink, listItems, mobileOrder }) => (
  <Flex
    mr={[0, 0, 39, 39, 35, 39]}
    order={[mobileOrder, mobileOrder, mobileOrder, 'initial']}
    flexDirection='column'
    width={[0.3, 0.3, 'auto']}
    mt={[32, 32, 32, 32, 0]}
    mb={[0, 0, 0, 0, 32, 0]}
  >
    <P
      color={'black'}
      fontFamily={'SoleilBk'}
      fontSize={'14px'}
      lineHeight={'24px'}
      letterSpacing='0.44px'
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
        <FooterListItem key={index} color='#8c8c8c' content={listItem} />
      ))}
    </Box>
  </Flex>
)

export default FooterListColumn
