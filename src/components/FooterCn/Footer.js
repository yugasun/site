import React from 'react'
import { Box, Row } from 'serverless-design-system'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import BottomSection from './BottomSection/index.js'

const Footer = () => (
  <Box pt={[0, 0, 5, 5, 3]} pb={[2, 2, 1, 1, 5]}>
    <Row
      m='auto'
      flexWrap='wrap'
      maxWidth={[1216, 1216, 1216, 1216, '76%', 1216]}
    >
      <Row width={1} px={[3, 3, 4, 4, 0]} flexWrap='wrap' mt={[0, 0, 0, 0, 4]}>
        <LeftSection />
        <RightSection />
      </Row>

      <BottomSection />
    </Row>
  </Box>
)

export default Footer
