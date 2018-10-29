import React from 'react'

import { Absolute, Card } from 'serverless-design-system'

const HomeHeroIncline = () => (
    <Absolute height='0' left='0'>
        <Card
        borderRight='99vw solid transparent'
        borderBottom={['84px solid white', '84px solid white', '198px solid white']}
        />
    </Absolute>
)

export default HomeHeroIncline