import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, pricing } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/cn/alerts/optimum-performance.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Alerts.module.css'

const AlertsHero = props => (
  <HeroWrapper customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo}
        />
        <div className={styles.productName}>告警</div>
        <div className={styles.productTagline}>
          自动配置的高级告警功能，可实时捕获错误信息及性能问题反馈
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
          alt={'Serverless Framework Alerts'}
          className={styles.productHeroImage}
        />
      </div>
    </div>
  </HeroWrapper>
)

export default AlertsHero
