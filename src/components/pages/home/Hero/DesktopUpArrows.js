import React from 'react'
import { Image, Relative } from 'serverless-design-system'
import upArrowGroup from 'src/assets/images/up-arrow-group-red.svg'

const DesktopUpArrows = () => (
    <Relative
    display={['none', 'none', 'none', 'block']}
    left={['-0%', '-0%', '-3%', '-4%', '-10%', '-15%']}
    top='200px'
    >
    <Image
      src={upArrowGroup}
    >
    </Image>
</Relative>
)

export default DesktopUpArrows