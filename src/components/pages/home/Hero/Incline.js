import React from 'react'

import { Absolute, Card } from 'serverless-design-system'

const HomeHeroIncline = () => (
    <Absolute height='0' left='0'>
        <Card
        pt={['111px', '111px', '0']}    
        borderRight='98vw solid transparent'
        borderBottom={['75px solid white', '75px solid white', '219px solid white']}
        />
    </Absolute>
)

export default HomeHeroIncline