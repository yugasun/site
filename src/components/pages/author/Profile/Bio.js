import React from 'react'
import { Box } from 'serverless-design-system'
import { TitleWithIcon } from 'src/fragments'
import { P } from 'src/fragments/DesignSystem'

const AuthorBio = ({ authorName, bio }) => (
  <Box width={[1, 1, 1, 0.75, 0.55]}>
    <TitleWithIcon>
      { authorName }
    </TitleWithIcon>
    <P>
      { bio }
    </P>
  </Box>
)

export default AuthorBio