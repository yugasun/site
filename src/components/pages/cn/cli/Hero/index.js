import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, gettingStarted } from 'src/constants/urls.cn'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/cli/CLI-hero.gif'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../CLI.module.css'

const CLIHero = props => (
  <HeroWrapper customPb={[62, 62, 62, 62, 92, 139]} bottomMarginBg='white'>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo}
        />
        <div className={styles.productName}>Serverless 命令行工具</div>
        <div className={styles.productTagline}>
          通过YAML+ CLI命令行工具，即可将Serverless应用轻松部署到云端
        </div>
        <div className={styles.productCTA}>
          <InternalLink to={gettingStarted}>
            <Button type='primary' text='快速开始' />
          </InternalLink>
        </div>
        <div className={styles.productEdition}>
          开始使用
          <InternalLink className={styles.editionLink} to={gettingStarted}>
            Serverless Framework 开源版
          </InternalLink>
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

export default CLIHero
