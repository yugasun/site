import React from 'react'
import { Box } from 'serverless-design-system'

const PageContainer = ({children}) => (
    <Box width={[1, 1, 1, 1, 1/2, '800px']} m='auto'>
        {children}
    </Box>
)

export default PageContainer