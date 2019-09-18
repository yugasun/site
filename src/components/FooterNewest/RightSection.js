import React from 'react'
import { Box, Column, P } from 'serverless-design-system'
import NewsLetterForm from './NewsletterForm'

// Renders the subscribe column
const Subscribe = () => (
  <Column
    width={[1, 1, 2.5 / 4, 3 / 4, 0.35]}
    order={['1', '1', '1', '1', '2']}
    pl={[0, 0, 0, 0, 3]}
  >
    <Box id='newsletter-box-footer'>
      <P
        color='#8c8c8c'
        fontFamily='SoleilBk'
        align={['center', 'center', 'left']}
        lineHeight={1.63}
        mb={0}
        mt={[42, 42, 0, 0, '12px']}
      >
        Join our monthly newsletter
      </P>
    </Box>
    <NewsLetterForm emailFieldProps={{ placeholder: 'e-mail address' }} />
  </Column>
)

export default Subscribe
