import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, pricing } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/cn/monitoring/monitoring-hero.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Components.module.css'

const Hero = props => (
  <HeroWrapper
    customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <img
        src={FrameworkLogo}
        alt={'Serverless Framework'}
        className={styles.frameworkLogo} />
      <div className={styles.productName}>
      组件
      </div>
      <div className={styles.productTagline}>
        使用组件快速部署 Serverless 应用
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
