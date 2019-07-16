import React from 'react'
import { Box } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import MobileTable from './MobileTable'
import DesktopTable from './DesktopTable'
import TabletTable from './TabletTable'

const FrameworkFeatures = () => (
  <Box pb={[0, 0, 50, 50, 104]} mb={[4, 4, 0]}>
    <Heading.h3 pt={[92, 92, 92, 92, 162]} align='center' pb={22}>
      Serverless Framework Features
    </Heading.h3>
    <MobileTable />
    <TabletTable />
    <DesktopTable />
  </Box>
)

export default FrameworkFeatures
