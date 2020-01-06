import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, pricing } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/debugging/invocations-explorer.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Debugging.module.css'

const Hero = props => (
  <HeroWrapper customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo}
        />
        <div className={styles.productName}>调试</div>
        <div className={styles.productTagline}>
          完善的API请求和函数调用，帮助开发者快速排障并优化函数性能。
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
