import React from 'react'
import styled from 'styled-components'
import { Box } from 'serverless-design-system'

const MobileCentered = styled(Box)`
    @media screen and (max-width: 560px) {
      margin: 0 auto;
    }
`
const MobileCenteredBox = ({children, ...props}) => (
    <MobileCentered {...props}>
        {children}
    </MobileCentered>
)

export default MobileCenteredBox