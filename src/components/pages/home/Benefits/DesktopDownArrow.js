import React from 'react'
import {Absolute, Image} from 'serverless-design-system'
import downArrows from 'src/assets/images/down-arrow-group-red.svg'

const DownArrowsAnimationStyles = {
    top: '160px',
    position: 'fixed'
}

const DesktopDownArrow = ({animationTriggered}) => (
    <Absolute
        display={['none', 'none', 'none', 'none', 'block']}
        right='0'
        mr={80}
        mt={70}
        style={animationTriggered ? DownArrowsAnimationStyles: {}}
        zIndex='5'
        >
        <Image
            src={downArrows}
        >
        </Image>
  </Absolute>
)

export default DesktopDownArrow