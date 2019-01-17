import React from 'react'
import { NewsLetterFormNew as NewsLetterForm} from 'src/components'
import { Box } from 'serverless-design-system'

const NewsletterOptin = () => (
    <Box width='74%' mt={6}>
        <NewsLetterForm emailFieldProps={{ placeholder: 'email address' }} />
    </Box>
)

export default NewsletterOptin