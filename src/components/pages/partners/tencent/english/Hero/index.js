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
        <InternalLink to={'/partners/cloud/tencent/chinese/'}>
          <div className={styles.viewInChineseTab}>
          查看中文版
          </div>
        </InternalLink>
        </div>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        
        <div className={styles.productHeadline}>
        Next generation, serverless cloud
        </div>
        <div className={styles.productTagline}>
        Tencent Cloud and Serverless have joined forces to create a serverless cloud focused on delivering outcomes, not infrastructure. Everything autoscaling; never pay for idle.
        </div>
        <div className={styles.productCTA}>
          <InternalLink to={'#expressjs-tencent'} anchorLink>
            <Button type='primary' text='View examples'/>
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
