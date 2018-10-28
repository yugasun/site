import React from 'react'
import { Absolute, Image } from 'serverless-design-system'
import upArrowGroup from 'src/assets/images/up-arrow-group-red.svg'

const DesktopUpArrows = () => (
    <Absolute
    display={['none', 'none', 'block']}
    left='0'
    ml={108}
    mt={220}
    >
    <Image
      src={upArrowGroup}
    >
    </Image>
</Absolute>
)

export default DesktopUpArrows