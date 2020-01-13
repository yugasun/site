import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, pricing } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/monitoring/monitoring-hero.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Monitoring.module.css'

const Hero = props => (
  <HeroWrapper customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo}
        />
        <div className={styles.productName}>监控</div>
        <div className={styles.productTagline}>
          针对 Serverless
          应用程序即时强大的指标监控，包括资源使用率，性能，错误等。
        </div>
        <div className={styles.productCTA}>
          <Button type='primary' text='敬请期待' />
          {/*
            <ExternalLink to={dashboard}>
            <Button type='primary' text='免费注册' />
          </ExternalLink>
           */}
        </div>

        <div className={styles.productEdition}>
          {/*
            Available now in
          <InternalLink
            className={styles.editionLink}
            to={pricing}>
          Serverless Framework Pro.
          </InternalLink>
             */}
        </div>
      </div>
      <div className={styles.productHeroColumnRight}>
        <img
          src={HeroImage}
          alt={'Serverless Framework Dashboard'}
          className={styles.productHeroImage}
        />
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
