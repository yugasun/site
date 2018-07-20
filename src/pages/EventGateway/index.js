import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import styles from './../common.css'
import commonStyles from './../../fragments/common.css'
import UseCasesSection from '../../fragments/UseCasesSection'
import Features from './../../fragments/Features'
import PreFooter from './../../fragments/PreFooter'

import iconGateway from '../../assets/images/group-6.png'
import Illustration from '../../assets/images/gateway-illustration.png'

import IllustrationPart1 from '../../assets/images/gateway-illustration1.png'
import IllustrationPart2 from '../../assets/images/gateway-illustration2.png'
import IllustrationPart3 from '../../assets/images/gateway-illustration3.png'
import glitchDivider from '../../assets/images/glitch-divider.png'
import iconFeature1 from '../../assets/images/event-gateway-feature1.png'
import iconFeature2 from '../../assets/images/event-gateway-feature2.png'
import iconFeature3 from '../../assets/images/event-gateway-feature3.png'
import iconFeature4 from '../../assets/images/event-gateway-feature4.png'
import iconFeature5 from '../../assets/images/event-gateway-feature5.png'
import iconFeature6 from '../../assets/images/event-gateway-feature6.png'


class EventGatewayPage extends React.Component {
  renderPrefooter() {
    return  (
      <PreFooter
        heading='Ready to get started?'
        descriptions={[
          'Dig deeper into Event Gateway use cases, or check out the examples in our open source repo.'
        ]}
        links={[
          { url: '/framework/docs/getting-started/', title: 'getting started' },
          { url: '/learn/', title: 'learn more' },
          { url: '/framework/docs/providers/aws/examples/', title: 'examples' }
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
        renderPrefooter={this.renderPrefooter}
      >
        <div className={ `${styles.gatewayBg} ${styles.platformInnerHero} ${styles.heroSectionWrapper}  ${commonStyles.newSite}` }>
          <div className={ `${styles.heroContainer} ${commonStyles.container}` }>
            <div className={ styles.heroPrimeImage }>
              <img src={iconGateway} alt="Event Gateway" />
            </div>
            <h2 className={ `${commonStyles.white} ${commonStyles.textCenter} ${commonStyles.medium}` }>
              serverless
            </h2>
            <h1 className={ `${commonStyles.white} ${commonStyles.textCenter} ${styles.medium}`}>
              event gateway
            </h1>
            <div className={ `${styles.heroDesc} ${styles.helfPad} ${commonStyles.textCenter}` }>
              React to any event on any cloud.
            </div>
            <div className={`${styles.heroClientsWrapper} ${styles.midWrapper}`}>
              <p className={commonStyles.textCenter}>
                The Event Gateway is an event router designed for event-driven, serverless architectures. It makes it easy to wire functions to http endpoints, react to business events with serverless functions, and to share event subscriptions with others.
              </p>
            </div>
            <div className={ `${styles.heroPrimeImage} ${styles.heroMainImage}` }>
              <img src={Illustration} alt="Event Router" />
            </div>
            <div className={`${styles.heroBulletsAlternate} ${styles.gatewayBullets}`}>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>
                  Simplify API development
                </span>
                <p>Simplify API The Event Gateway is the simplest developer experience for wiring Serverless functions to http endpoints.</p>
              </div>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>
                  React to custom events
                </span>
                <p>Expand your Serverless use-cases by reacting to any custom event with Serverless functions.</p>
              </div>
              <div className={styles.heroBullets}>
                <span className={commonStyles.white}>
                  Vendor Choice
                </span>
                <p>The Event Gateway is open source and cloud agnostic, allowing for more choice and flexibility.</p>
              </div>
            </div>
            <div className={ `${styles.heroContactWrapper} ${commonStyles.textCenter} ${commonStyles.padBottom0}` }>
              <a href='https://dashboard.serverless.com'
                target='_blank'
                className={ `${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}` }>
                sign up
              </a>
              &nbsp;
              <Link to='/enterprise'
                className={ `${commonStyles.btn} ${commonStyles.btnTransparent} ${styles.btn}` }>
                contact sales
              </Link>
            </div>
          </div>
        </div>

        <div className={`${styles.whiteSectionWrapper} ${commonStyles.newSite}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <UseCasesSection
              title='Event Gateway Use Cases'
              description='These are the 3 main use cases for Event Gateway that you should know about.'
              usecases={[
                {
                  title: 'Simple, serverless APIs',
                  description: 'Use the Event Gateway alongside with Serverless Framework to get the simplest, most productive developer experience possible for developing APIs. A single configuration file allows you to list your functions and define the endpoints that they’re subscribed to. Hit deploy and you’re live.',
                  image: IllustrationPart1,
                },
                {
                  title: 'Subscribe functions to webhooks',
                  description: 'The Event Gateway makes it dead simple to wire functions to any customer event, including webhooks.',
                  image: IllustrationPart2,
                },
                {
                  title: 'Multi-provider service',
                  description: 'The Event Gateway is cloud agnostic, allowing for more vendor choice and flexibility.',
                  image: IllustrationPart3,
                },
              ]}
            />
          </div>
        </div>

        <div className={styles.sectionSeperator}>
          <img src={glitchDivider} />
        </div>

        <div className={`${styles.footerPrevPad} ${styles.whiteSectionWrapper} ${commonStyles.newSite}`}>
          <div className={`${styles.whiteSectionContainer} ${commonStyles.container}`}>
            <Features features={[
              {
                title: 'API Gateway',
                description: 'Easily subscribe FaaS functions to HTTP endpoints. Setup multiple Serverless services under a single domain, even across AWS accounts.',
                image: iconFeature1
              },
              {
                title: 'Pub/Sub',
                description: 'Take advantage of pub/sun functionality but utilizing custom events. This allows you to process the same event with multiple systems.',
                image: iconFeature2
              },
              {
                title: 'Connector Functions',
                description: 'Automatically route events to external systems like Kinesis, Firehose, SQS, etc.',
                image: iconFeature3
              },
              {
                title: 'Platform Agnostic',
                description: 'All your cloud services are now compatible with one another; share cross-cloud functions and events with AWS Lambda, Microsoft Azure, IBM OpenWhisk and Google Cloud Platform.',
                image: iconFeature4
              },
              {
                title: 'Streaming Events',
                description: 'Data streams in you application become events. Centralize events from any cloud provider to get a bird’s eye view of all the data flowing through your cloud.',
                image: iconFeature5
              },
              {
                title: 'Shareable events',
                description: 'Share events and functions to other parts of the application. Your teammates can find them and utilize them in their own services.',
                image: iconFeature6
              }
            ]} />
          </div>
        </div>
      </Default>
    )
  }
}

EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
