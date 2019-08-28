import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import { Heading, Button } from 'src/fragments/DesignSystem'
import ResourceList from './ResourceList'

const FrameworkFeatures = () => (
  <Box>
    <Heading.h3
      pt={[62, 62, 92, 92, 132]}
      align='center'
      pb={[32, 32, 42, 42, 62]}
    >
      More resources
    </Heading.h3>
    <ResourceList />
    <Flex
      justifyContent='center'
      pt={[32, 32, 42, 42, 62]}
      pb={[62, 62, 92, 92, 132]}
    >
      <Button>view full list</Button>
    </Flex>
  </Box>
)

export default FrameworkFeatures
