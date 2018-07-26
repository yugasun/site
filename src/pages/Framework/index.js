import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './../common.css'
import commonStyles from './../../fragments/common.css';
import UseCasesSection from '../../fragments/UseCasesSection'
import Testimonial from '../../fragments/Testimonial'
import Features from './../../fragments/Features'
import PreFooter from './../../fragments/PreFooter'

import iconFramework from '../../assets/images/bolt.png';
import Illustration from '../../assets/images/framework-illustration.png';

import gcp from '../../assets/images/gcp.png'
import azure from '../../assets/images/azure.png'
import aws from '../../assets/images/aws.png'
import ibm from '../../assets/images/ibm.png'
import kubernetes from '../../assets/images/kubernetes.png'

import IllustrationPart1 from '../../assets/images/framework-illustration1.png';
import IllustrationPart2 from '../../assets/images/framework-illustration2.png';
import IllustrationPart3 from '../../assets/images/framework-illustration3.png';
import iconFeature1 from '../../assets/images/framework-feature-1.png';
import iconFeature2 from '../../assets/images/framework-feature-2.png';
import iconFeature3 from '../../assets/images/framework-feature-3.png';
import iconFeature4 from '../../assets/images/framework-feature-4.png';
import iconFeature5 from '../../assets/images/framework-feature-5.png';
import iconFeature6 from '../../assets/images/framework-feature-6.png';


class FrameworkPage extends React.Component {
  renderPrefooter() {
    return  (
      <PreFooter
        heading='New to serverless?'
        descriptions={[
          'To get started, pop open your terminal & run:',
          'npm install serverless -g'
        ]}
        links={[
          { url: '/framework/docs', title: 'documentation' },
          { url: '/framework/docs/providers/aws/examples/', title: 'serverless example' },
          { url: 'https://github.com/serverless/serverless', title: 'github repo' }
        ]}
      />
    );
  }

  render() {
    return (
      <Default
        className={ `${commonStyles.body} ${commonStyles.newSite}` }
        {...this.props}
        fullWidth
        whiteLogo
        navbarInitialTransparency
        coloredHeader={ true }
        headerHideSignUp={ true }
        renderPrefooter={this.renderPrefooter}>
        <div className={ `${styles.frameworkBg} ${styles.platformInnerHero} ${styles.heroSectionWrapper}  ${commonStyles.newSite}` }>
          <div className={ `${styles.heroContainer} ${commonStyles.container}` }>
            <div className={ styles.heroPrimeImage }>
              <img src={iconFramework} alt="Serverless Framework" />
            </div>
            <h2 className={ `${commonStyles.white} ${commonStyles.textCenter} ${commonStyles.medium}` }>
              serverless
            </h2>
            <h1 className={ `${commonStyles.white} ${commonStyles.textCenter} ${styles.medium}`}>
              framework
            </h1>
            <div className={ `${styles.heroDesc} ${styles.helfPad} ${commonStyles.textCenter}` }>
              The easy, open way to build Serverless applications
            </div>
            <div className={`${styles.heroClientsWrapper} ${styles.midWrapper}`}>
              <p className={commonStyles.textCenter}>
                The Serverless Framework is an open-source CLI for building and deploying serverless applications. With over 6 million deployments handled, the Serverless Framework is the tool developers trust to build cloud applications.
              </p>
            </div>
            <div className={ `${styles.heroPrimeImage} ${styles.heroMainImage}` }>
              <img src={Illustration} alt="Serverless Framework" />
            </div>
            <div className={styles.heroBulletsAlternate}>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>Infrastructure As Code</span>
                <p>With the Serverless Framework you can define your entire Serverless application, utlizing popular Serverless technologies like AWS Lambda, with a simple yaml configuration file.  </p>
              </div>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>Simple Serverless Development</span>
                <p>The Serverless Framework provides a simple, intuitive CLI experience that makes it easy to develop and deploy applications to cloud platforms like AWS, Microsoft Azure, Google Cloud Platform, IBM OpenWhisk, and more.</p>
              </div>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>Provider Agnostic</span>
                <p>The Serverless Framework is open source and provider agnostic, meaning you only need one tool to tap in to the power of all the cloud providers.</p>
              </div>
            </div>
            <div className={ `${styles.heroContactWrapper} ${commonStyles.textCenter}` }>
              <Link to='/framework/docs/getting-started/'
                className={ `${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}` }>
                quick start
              </Link>
              <a href='https://dashboard.serverless.com'
                target='_blank'
                className={ `${commonStyles.btn} ${commonStyles.btnTransparent} ${styles.btn}` }>
                login
              </a>
            </div>
            <div className={styles.heroClientsWrapper}>
              <div className={styles.cloudProvider}>Supports Top Cloud Providers</div>
              <ul className={styles.clientList}>
                <li><img src={gcp} alt='Google Cloud Provider' /></li>
                <li><img src={azure} alt='Microsoft Azure' /></li>
                <li><img src={aws} alt='Amazon Web Services' /></li>
                <li><img src={ibm} alt='IBM OpenWhisk' /></li>
                <li><img src={kubernetes} alt='Kubernetes' /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`${styles.whiteSectionWrapper} ${commonStyles.newSite}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <UseCasesSection
              title='Serverless Framework Use Cases'
              description='These are the 3 main use cases for the Serverless Framework that you should know about.'
              usecases={[
                {
                  title: 'Simple, scaleable APIs',
                  description: 'The Serverless Framework provides a simple way to develop infinitely scaleable, pay-per-execution APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live. With native support for AWS API Gatewway, Event Gateway, and more you can utilize the tools you know and trust with a single experience.',
                  image: IllustrationPart1,
                },
                {
                  title: 'Easy Automation',
                  description: 'The Serverless Framework makes automating anything quick and easy. Simply subscribe a function to the event  and let the framework take care of the rest.',
                  image: IllustrationPart2,
                },
                {
                  title: 'Data Processing',
                  description: 'Transforming data and building data pipelines and has never been easier.',
                  image: IllustrationPart3,
                },
              ]}
            />
          </div>
        </div>

        <Testimonial />

        <div className={`${styles.footerPrevPad} ${styles.whiteSectionWrapper} ${commonStyles.newSite}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <Features features={[
              {
                title: 'Minimum Configuration',
                description: 'Define your entire Serverless application with a single yaml configuration file.',
                image: iconFeature1
              },
              {
                title: 'Robust Ecosystem',
                description: 'The Serverless Framework community has built and published hudreds of plugins to extend the framework’s functionality and example projects to get you started quickly. ',
                image: iconFeature2
              },
              {
                title: 'Multi Lingual',
                description: 'Don’t be hamstrung by just one language: write functions in python, node.js, java, Go, scala, C# and more.',
                image: iconFeature3
              },
              {
                title: 'Cloud Agnostic',
                description: 'All your cloud services are now compatible with one another: share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.',
                image: iconFeature4
              },
              {
                title: 'Application Lifecycle Management',
                description: 'With built in support for local development, stages, rollback and more, the framework is loaded with the functionality you need to manage the lifecycle of your application.',
                image: iconFeature5
              },
              {
                title: 'Streaming Logs',
                description: 'Streaming logs from your functions directly in to your CLI, making it easy to rapidly redug and troubleshoot. ',
                image: iconFeature6
              }
            ]} />
          </div>
        </div>
      </Default>
    )
  }
}

FrameworkPage.hasLoadingState = true

export default FrameworkPage
