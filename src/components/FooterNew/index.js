// TODO
// Identify how to include hard coded values in theme
// Negative pixel for icon top - possible to include in theme
// Make image load faster

import React from 'react'
import { Background, Box, Column, Row } from 'serverless-design-system'

import FooterIcon from './FooterIcon'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

// Self contained Root Renderer for footer
const FooterWrapper = ({ prefooter, prefooterOnlyDesktop }) => {
    const mobileHeight = prefooterOnlyDesktop ? '62px': '300px'

    return (
      <Column>
        <Background backgroundImage={['linear-gradient(50deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(50deg,rgb(0,0,0) 50%,#70221f)', 'linear-gradient(30deg, rgb(0, 0, 0) 60%, #70221f)']}>
          <Box pt={[0, 0, 7]} pb={7}>
            <Row m='auto' flexWrap='wrap' maxWidth={[1216, 1216, 1216, 1216, '76%', 1216]}>
              <Box width={1} px={[0, 0, 0]} height={[mobileHeight, mobileHeight, 'auto', 'auto', '235px']}>
                {prefooter ? prefooter() : null}
                <FooterIcon />
              </Box>

              <Row width={1} px={[3, 3, 4, 4, 0]} flexWrap='wrap' mt={[0, 0, 0, 0, '15px']}>
                <LeftSection />
                <RightSection />
              </Row>
            </Row>
          </Box>
        </Background>
      </Column>
    )
  }
export default FooterWrapper
