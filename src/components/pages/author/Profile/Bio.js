import React from 'react'
import { Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'

const AuthorBio = ({ authorName, bio }) => (
  <Box width={[1, 1, 1, 0.75, 0.55]}>
    <Heading.h2
      fontFamily='SoleilBk'
      fontSize={[5, 5, 5, 7]}
      lineHeight={0}
      letterSpacing='0.5px'
    >
      {authorName}
    </Heading.h2>
    <P>{bio}</P>
  </Box>
)

export default AuthorBio
