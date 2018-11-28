import React from 'react'
import { PL } from 'src/fragments/DesignSystem'

const Description = ({children}) => (
    <PL
        color='white'
        m={0}
        pt={['40px', '40px', '30px']}
        align={['center', 'center', 'center', 'center', 'initial']}
    >
        {children}
    </PL>
)

export default Description