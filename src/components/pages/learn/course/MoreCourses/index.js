import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import { Heading, SecondaryButton } from 'src/fragments/DesignSystem'
import ResourceList from './ResourceList'

const FrameworkFeatures = () => (
  <Box py={[92, 92, 92, 92, 132]}>
    <Heading.h3 align='center' mb={[32, 32, 42, 42, 62]}>
      More courses
    </Heading.h3>
    <ResourceList />
    <Flex mt={[32, 32, 32, 32, 62]} justifyContent='center'>
      <SecondaryButton>more courses</SecondaryButton>
    </Flex>
  </Box>
)

export default FrameworkFeatures
