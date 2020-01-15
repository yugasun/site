import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { startUsePluginsGithub, pluginsGithub } from 'src/constants/urls.cn'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/cn/plugins/logo-serverless-plugins.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../Components.module.css'

const Hero = props => (
  <HeroWrapper
    customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo} />
        <div className={styles.productName}>
          插件
        </div>
        <div className={styles.productTagline}>
          提供 1000+ 开源插件,帮助开发者扩展Serverless
        </div>
        <div className={styles.productCTA}>
          <ExternalLink to={startUsePluginsGithub}>
            <Button type='primary' text='开始使用'/>
          </ExternalLink>
        </div>
        <div className={styles.productEdition}>
          <ExternalLink
            className={styles.editionLink}
            to={pluginsGithub}>
          Serverless Framework 开源插件
          </ExternalLink>
        </div>
      </div>
      <div className={styles.productHeroColumnRight}>
        <img
          src={HeroImage}
          alt={'Serverless Framework Dashboard'}
          className={styles.productHeroImage} />
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
