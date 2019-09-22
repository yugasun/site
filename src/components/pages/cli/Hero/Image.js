import React from 'react'
import { Box } from 'serverless-design-system'
import '../video.css'

const HeroVideo = props => (
  <Box mt={[0, 0, 0, 0, '-20px', 23]}>
    <video autoPlay muted className='cli-video' controls>
      <source
        src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/cli/CLI-hero.mp4'
        type='video/mp4'
      />
    </video>
  </Box>
)

export default HeroVideo
