import React from 'react'
import { Box } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import ResourceList from './ResourceList'

const FrameworkFeatures = () => (
  <Box>
    <Heading.h3 align='center' mb={[32, 32, 42, 42, 62]}>
      Tutorials
    </Heading.h3>
    <ResourceList />
  </Box>
)

export default FrameworkFeatures
