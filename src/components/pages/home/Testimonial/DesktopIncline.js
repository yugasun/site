import React from 'react'

import { Card } from 'serverless-design-system'
import styled from 'styled-components'

const OnlyDesktopCardWithTopMargin = styled(Card)`
    margin-top: 200px;
    @media screen and (max-width: 415px) {
        display: none;
    }
`

const HomeTestimonialIncline = () => (
        <OnlyDesktopCardWithTopMargin
        borderLeft='100vw solid transparent'
        borderBottom='200px solid #FD5651'
        mt={100}
        />
)

export default HomeTestimonialIncline