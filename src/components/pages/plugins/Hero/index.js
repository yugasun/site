import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, pricing } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/monitoring/monitoring-hero.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Plugins.module.css'

const Hero = props => (
  <HeroWrapper
    customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <img
        src={FrameworkLogo}
        alt={'Serverless Framework'}
        className={styles.frameworkLogo} />
      <div className={styles.productName}>
        plugins
      </div>
      <div className={styles.productTagline}>
        Add functionality to the Serverless Framework via 1,000+ plugins.
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
