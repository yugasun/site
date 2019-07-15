import React from 'react'
import { Image, Box } from 'serverless-design-system'
import tempVideoImage from 'src/assets/images/home/temp-video-image.png'

const Terminal = () => (
  <Box ml={[0, 0, 30, 30, 133]} mt={[22, 22, 0, 0, '-120px']}>
    <Image
      src={tempVideoImage}
      width={[360, 360, 360, 360, 488]}
      height={[203, 203, 203, 203, 347]}
    />
  </Box>
)

export default Terminal
