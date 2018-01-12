import React from 'react'
import { Link } from 'react-router'
import Default from '../../layouts/Default'
import GridSection from '../../components/GridSection'
import Hero from '../../fragments/HeroProduct'
import styles from './EventGateway.css'

const urlBase = process.env.S3_BUCKET

const EventGatewayPage = (props) => {
  const img = `${urlBase}images/event-gateway-ground.svg`
  const bg = `${urlBase}images/toolkit-ground.png`

  const content = (
    <div className={styles.contents}>
      <p>React to any event, with serverless functions on any platform</p>
    </div>
  )

  const ctaButton = (
    <div className={styles.ctaWrapper}>
      <Link to='/event-gateway/beta/' className={`${styles.btn} ${styles.btnGrey}`}>
        Request Beta
      </Link>
    </div>
  )

  return (
    <Default className={styles.page} {...props} fullWidth whiteLogo coloredHeader={false}>
      <Hero
        background={{
          backgroundColor: '#000000a3',
          backgroundImage: `url(${bg}), url(${img})`,
          backgroundPosition: 'center top, center 65%',
          backgroundSize: '100%, 94%'
        }}
        icon={`${urlBase}icons/gateway.svg`}
        title='Event Gateway Entreprise'
        content={content}
        cta={ctaButton}
      />

      <h2 className={styles.sectionTitle}>
        What can you do?
      </h2>

      <GridSection
        items={[
          {
            title: 'Build event driven APIs',
            text: 'Build flexible, scalable serverless backends that respond to HTTP requests.'
          },
          {
            title: 'Build Platforms',
            text: 'Easily extend functionality, expose integration points, and share data in the form of events.'
          },
          {
            title: 'Extend Legacy Systems',
            text: 'Emit selected events from legacy systems and extend thier functionality through serverless functions.'
          }
        ]}
      />

      <h2 className={styles.sectionTitle}>
        What do you get?
      </h2>

      <GridSection
        items={[
          {
            title: 'Innovate More Quickly',
            text: 'Event-driven microservices are naturally autonomous, allowing businesses to stay agile and experiment more.'
          },
          {
            title: 'Unlock Your Data',
            text: 'Centralize your data in flight in the form of events, route them wherever you want, and avoid platform lockin.'
          },
          {
            title: 'Real-Time Responsiveness',
            text: 'React to business events in realtime, make intelligent business decisions, and respond to customer needs.'
          }
        ]}
      />
    </Default>
  )
}
EventGatewayPage.hasLoadingState = true

export default EventGatewayPage
