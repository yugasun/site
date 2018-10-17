import React from 'react'

import { Box, P } from 'serverless-design-system'
import FooterListItem from './Item'

// Renders each column in the footer list
const FooterListColumn = ({ header, listItems }) => (
  <Box width={['50%', '50%', '20%']} mb={[2, 2, 0]}>
    <P
      color={'white'}
      fontFamily={'Serverless'}
      fontSize={1}
      lineHeight={1}
      letterSpacing='text'
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
  </Box>
)

export default FooterListColumn
