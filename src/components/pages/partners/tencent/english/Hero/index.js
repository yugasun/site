import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { InternalLink } from 'src/fragments'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/partners/cloud/tencent/tencent-cloud-hero.gif'
import styles from '../Tencent.module.css'

const Hero = props => (
  <HeroWrapper>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <div className={styles.viewInChineseTab}>
        查看中文版
        </div>
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
          alt={'Serverless Framework Dashboard'}
          className={styles.productHeroImage} />
      </div>
    </div>
  </HeroWrapper>
)

export default Hero
