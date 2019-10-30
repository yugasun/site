import React from 'react'
import { HeroWrapper } from 'src/fragments'
import { ExternalLink, InternalLink } from 'src/fragments'
import { dashboard, gettingStarted } from 'src/constants/urls.js'
import { Button } from 'src/components'
import HeroImage from 'src/assets/images/logo-serverless-components-center-vertical-dark.png'
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
          components
        </div>
        <div className={styles.productTagline}>
          The Serverless Framework's new infrastructure provisioning technology — Build, compose, & deploy serverless apps in seconds...
        </div>
        <div className={styles.productCTA}>
          <ExternalLink to={'https://www.github.com/serverless/components'}>
            <Button type='primary' text='Use Components'/>
          </ExternalLink>
        </div>
        <div className={styles.productEdition}>
          Available now in
          <InternalLink
            className={styles.editionLink}
            to={gettingStarted}>
          Serverless Framework Open-Source.
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
