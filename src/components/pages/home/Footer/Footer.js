import React from 'react'
import { Box, Row } from 'serverless-design-system'
import FooterIcon from 'src/components/Footer/FooterIcon'
import LeftSection from 'src/components/Footer/LeftSection'
import RightSection from 'src/components/Footer/RightSection'

const Footer = props => (
  <Box pt={[0, 0, 3]} pb={[5, 5, 5, 5, 6]}>
    <Row
      m='auto'
      flexWrap='wrap'
      maxWidth={[1216, 1216, 1216, 1216, '76%', 1216]}
    >
      <Box width={1} px={[0, 0, 0]}>
        <FooterIcon />
      </Box>

      <Row width={1} px={[3, 3, 4, 4, 0]} flexWrap='wrap' mt={[0, 0, 0, 0, 4]}>
        <LeftSection />
        <RightSection />
      </Row>
    </Row>
  </Box>
)

export default Footer
