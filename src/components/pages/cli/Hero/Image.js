import React from 'react'
import { Box } from 'serverless-design-system'
import '../video.css'
import cliGif from 'src/assets/images/pages/cli/CLI-hero.gif'
import styles from './HeroCLI.module.css'

const HeroVideo = props => (
  <Box mt={[0, 0, 0, 0, '-20px', 23]}>
    <img src={cliGif} className={`${styles.heroVideo}`}/>
  </Box>
)

export default HeroVideo
