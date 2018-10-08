

import React from 'react'
import { Box, Heading, P } from 'serverless-design-system'
import { AppContainer } from 'src/components'

export default ({ id, frontmatter, content }) => {
  return (
        <AppContainer>
        <Box width={1}
        px={200}
        my={10}
    pb={[300, 300, 300, 250]}>
            <Heading.h1>
                {frontmatter.title}
            </Heading.h1>
            <P dangerouslySetInnerHTML={{ __html: content }}>
            
            </P>
        </Box>
    </AppContainer>
  )
}
