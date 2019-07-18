// TODO
// Identify how to include hard coded values in theme
// Negative pixel for icon top - possible to include in theme
// Make image load faster

import React from 'react'
import { Background, Box, Column, Row } from 'serverless-design-system'

import FooterIcon from './FooterIcon'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import styled from 'styled-components'

const ColumnWithZIndex = styled(Column)`
  z-index: 5;
`

// Self contained Root Renderer for footer
const FooterWrapper = ({ prefooter, prefooterOnlyDesktop, noPrefooter }) => {
  return (
    <React.Fragment>
      {prefooter ? prefooter() : null}
      <ColumnWithZIndex>
        <Background
          backgroundImage={[
            'linear-gradient(50deg,rgb(0,0,0) 50%,#70221f)',
            'linear-gradient(50deg,rgb(0,0,0) 50%,#70221f)',
            'linear-gradient(30deg, rgb(0, 0, 0) 60%, #70221f)',
          ]}
        >
          <Box pt={[0, 0, 5]} pb={[2, 2, 1, 1, 5]}>
            <Row
              m='auto'
              flexWrap='wrap'
              maxWidth={[1216, 1216, 1216, 1216, '76%', 1216]}
            >
              <Box width={1} px={[0, 0, 0]}>
                <FooterIcon />
              </Box>

              <Row
                width={1}
                px={[3, 3, 4, 4, 0]}
                flexWrap='wrap'
                mt={[0, 0, 0, 0, 4]}
              >
                <LeftSection />
                <RightSection />
              </Row>
            </Row>
          </Box>
        </Background>
      </ColumnWithZIndex>
    </React.Fragment>
  )
}
export default FooterWrapper
