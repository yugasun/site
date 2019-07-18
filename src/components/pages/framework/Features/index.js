import React from 'react'
import { Box } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import MobileTable from './MobileTable'
import DesktopTable from './DesktopTable'
import TabletTable from './TabletTable'

const FrameworkFeatures = () => (
  <Box>
    <Heading.h3
      pt={[92, 92, 92, 92, 162]}
      align='center'
      pb={[22, 22, 22, 22, 42]}
    >
      Serverless Framework Features
    </Heading.h3>
    <DesktopTable />
  </Box>
)

export default FrameworkFeatures
