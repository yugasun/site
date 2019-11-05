import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { InternalLink, ExternalLink } from 'src/fragments'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/partners/cloud/tencent/tencent-cloud-hero.gif'
import TencentCloudLogo from 'src/assets/images/pages/partners/cloud/tencent/tencent-cloud-logo.png'
import styles from '../Tencent.module.css'

const Hero = props => (
  <HeroWrapper
    background={[
      '#000',
      '#000',
      '#000',
      'linear-gradient(150deg,rgb(0,0,0) 80%, #540F0C)',
      'linear-gradient(150deg,rgb(0,0,0) 88%, #540F0C)',
      'linear-gradient(150deg,rgb(0,0,0) 85%, #540F0C)',
    ]}
    bottomMarginId='expressjs-tencent'
  >
    <div className={styles.heroPreHeadlineContent}>
        <ExternalLink to={'https://cloud.tencent.com/product/sf'}>
          <img 
          src={TencentCloudLogo}
          alt={'Tencent Cloud Logo'}
          className={styles.productHeroImage} />
        </ExternalLink>
        <InternalLink to={'/partners/cloud/tencent/'}>
          <div className={styles.viewInChineseTab}>
          View in english
          </div>
        </InternalLink>
        </div>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        
        <div className={styles.productHeadline}>
        下一代无服务器 —— Serverless Cloud
        </div>
        <div className={styles.productTagline}>
        腾讯云与 Serverless 联手创建了下一代无服务器，开发者无需关注底层资源即可部署完整可用的 Serverless 应用架构。Serverless 应用下的云函数资源，按需付费，同时能够根据业务请求自动进行弹性伸缩，让您可以从容面对业务请求峰值。
        </div>
        <div className={styles.productCTA}>
          <InternalLink to={'#expressjs-tencent'} anchorLink>
            <Button type='primary' text='查看范例'/>
          </InternalLink>
        </div>
      </div>
      <div className={styles.productHeroColumnRight}>
        <img
          src={HeroImage}
          alt={'Serverless Framework CLI - Tencent Cloud'}
          className={styles.productHeroImage} />
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
