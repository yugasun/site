import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, pricing } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/pages/cicd/cicd-hero.png'
import FrameworkLogo from 'src/assets/images/logo-serverless-framework-center-horizontal-dark.png'
import styles from '../CICD.module.css'

const CiCdHero = props => (
  <HeroWrapper
    customPb={[62, 62, 62, 62, 92, 139]}>
    <div className={styles.productHeroContainer}>
      <div className={styles.productHeroColumnLeft}>
        <img
          src={FrameworkLogo}
          alt={'Serverless Framework'}
          className={styles.frameworkLogo} />
        <div className={styles.productName}>
          CI/CD
        </div>
        <div className={styles.productTagline}>
          Test and deploy your serverless apps with ease!
        </div>
        <div className={styles.productCTA}>
          <ExternalLink to={dashboard}>
            <Button type='primary' text='Sign up for free'/>
          </ExternalLink>
        </div>
        <div className={styles.productEdition}>
          Available now in
          <InternalLink
            className={styles.editionLink}
            to={pricing}>
          Serverless Framework Pro.
          </InternalLink>
        </div>
      </div>
      <div className={styles.productHeroColumnRight}>
        <img
          src={HeroImage}
          alt={'Serverless Framework CI/CD'}
          className={styles.productHeroImage} />
      </div>
    </div>
  </HeroWrapper>
)

export default CiCdHero
