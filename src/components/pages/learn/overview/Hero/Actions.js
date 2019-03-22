import React from 'react'
import { push } from 'gatsby-link'
import { Flex, Box, Text } from 'serverless-design-system'
import { learn } from 'src/constants/urls'
import { Button } from 'src/fragments/DesignSystem'

const RightSection = () => (
  <Flex.column
    width={[1, 1, 0.75, 0.5, 0.5, 4 / 5]}
    pl={[0, 0, 4]}
    pr={[0, 0, 0]}
    alignItems='center'
    justifyContent='flex-end'
  >
    <Text.p
      fontSize={[2, 2, 4]}
      fontFamily='SoleilLt'
      lineHeight={3}
      letterSpacing={0}
      mt={[3, 3, 5]}
      mb={3}
      color='white'
    >
      Just like wireless internet has wires somewhere, serverless architectures
      still have servers somewhere.
      <br />
      <br />
      What ‘serverless’ really means is that, as a developer you don’t have to
      think about those servers. You just focus on code.
    </Text.p>
    <Flex width={1} flexDirection={['column', 'column', 'column', 'row']}>
      <Button onClick={() => push(learn.useCases)} mb={3} mr={[0, 0, '32px']}>
        use cases
      </Button>
      <Button
        onClick={() => push(learn.comparisons)}
        mb={3}
        mr={[0, 0, '32px']}
      >
        comparisons
      </Button>
      <Button onClick={() => push(learn.caseStudy)}>case studies</Button>
    </Flex>
  </Flex.column>
)

export default RightSection
