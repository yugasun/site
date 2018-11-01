import React from 'react'

import { Card } from 'serverless-design-system'
import styled from 'styled-components'

const OnlyDesktopCardWithTopMargin = styled(Card)`
    margin-top: 50px;
    @media screen and (max-width: 415px) {
        display: none;
    }
`

const HomeTestimonialIncline = () => (
        <OnlyDesktopCardWithTopMargin
        borderLeft='98.9vw solid transparent'
        borderBottom='200px solid #fd5750'
        mt={100}
        />
)

export default HomeTestimonialIncline