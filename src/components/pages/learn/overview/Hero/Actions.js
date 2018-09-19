import React from 'react'
import { push } from 'gatsby-link'
import {
  Flex,
  Box,
  Button,
} from 'serverless-design-system/src'
import { learn } from 'src/constants/urls'

const RightSection = () => (
  <Flex.column
    width={[1, 1, 0.4]}
    alignItems='center'
    justifyContent='flex-end'
    py={3}
    px={[0, 0, 2, 3, 6]}
  >
    <Box width={1} maxWidth={280}>
      <Button width={1} onClick={() => push(learn.useCases)} mb={3}>use cases</Button>
      <Button width={1} onClick={() => push(learn.comparisons)} mb={3}>comparisons</Button>
      <Button width={1} onClick={() => push(learn.caseStudy)}>case study</Button>
    </Box>
  </Flex.column>
)

export default RightSection