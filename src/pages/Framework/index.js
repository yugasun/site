import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './Framework.css'
import Terminal from '../../components/Terminal'
import terminalCommands from './terminalCommands'
import NewsletterStrip from '../../fragments/NewsletterStrip'

const FrameworkPage = (props) => {
  return (
    <Default className={styles.page} {...props} fullWidth whiteLogo coloredHeader={false}>
      <div className={styles.toolHero}>
        <div className={styles.boundSmaller}>
          <img className={styles.toolIcon} width={200} height={200} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/platform.svg' />
          <h1 className={styles.toolTitle}>Serverless Framework</h1>
          <p className={styles.toolDescription}>Open-source CLI for building serverless architectures. At 18,000 stars on GitHub, the Framework started a movement.</p>
          <div className={styles.toolProperties}>
            <div className={styles.toolProperty}><img width={30} height={30} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/github-icon-white.svg' /> ★ 18,391</div>
            <div className={styles.toolProperty}><img width={30} height={30} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/icon-forum.png' />5,000</div>
            <div className={styles.toolProperty}><img width={18} height={30} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/icon-gitter.png' />1,700</div>
          </div>
        </div>
      </div>
      <div className={styles.sectionDemo}>
        <div className={styles.bound}>
          <div className={styles.demoMeta}>
            <h2>Deploy your function right now.</h2>
            <p className={styles.demoDescription}>Serverless Framework is your single toolkit for deploying serverless architectures to any provider. You build the features, we configure the infrastructure. Done.</p>
            <div className={styles.demoLinks}>
              <Link className={`${styles.btn} ${styles.btnBlue}`} to='/framework/docs/'>View Docs</Link>
              <a className={`${styles.btn} ${styles.btnGrey}`} href='https://github.com/serverless/serverless'><img width={24} height={24} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/github-icon.svg' /> Github</a>
            </div>
          </div>
          <div className={styles.demoHalf}>
            <Terminal commands={terminalCommands} />
          </div>
        </div>
      </div>
      <div className={styles.bound}>
        <div className={styles.sectionFeatures}>
          <div className={styles.feature}>
            <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/provider-agnostic.svg' />
            <h3 className={styles.featureTitle}>Provider agnostic</h3>
            <p>Centrally deploy to AWS Lambda, Microsoft Azure, Google Cloud Platform and IBM OpenWhisk.</p>
          </div>
          <div className={styles.feature}>
            <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/extensible.svg' />
            <h3 className={styles.featureTitle}>Extensible with plugins</h3>
            <p>Use dozens community-made plugins, or make a new one specific to your application. Framework is open source and easy to build for.</p>
          </div>
          <div className={styles.feature}>
            <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/multi-lingual.svg' />
            <h3 className={styles.featureTitle}>Multi-lingual</h3>
            <p>Don’t be hamstrung by just one language: write functions in python, node.js, java, scala or C#.</p>
          </div>
          <div className={styles.feature}>
            <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/automatic-scaling.svg' />
            <h3 className={styles.featureTitle}>Automatic scaling</h3>
            <p>Don’t spend time and resources provisioning unused infrastructure. Serverless architectures expand and contract on demand, cutting server costs by more than half.</p>
          </div>
          <div className={styles.feature}>
            <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/faster-iterations.svg' />
            <h3 className={styles.featureTitle}>Faster iteration</h3>
            <p>Develop and deploy infinitely scalable applications within minutes. Provision and deploy a REST API or data pipeline without provisioning resources.</p>
          </div>
          <div className={styles.feature}>
            <img className={styles.featureIcon} src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/unified-dev-experience.svg' />
            <h3 className={styles.featureTitle}>Unified dev experience</h3>
            <p>Develop, test and deploy functions and the events they react to on any cloud provider. Manage your services and functions in one place--from the CLI.</p>
          </div>
        </div>
      </div>
      <div className={`${styles.boundSmall} ${styles.newsletterSection}`}>
        <NewsletterStrip />
      </div>
    </Default>
  )
}
FrameworkPage.hasLoadingState = true

export default FrameworkPage
