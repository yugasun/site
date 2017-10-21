import React from 'react'
import styles from './Section.css'
import Button from '../../components/Button'

const WorkshopSection = (props) => {
  const imgSrc = props.backgroundImage || 'http://www.fillmurray.com/740/110'
  const text = props.text || 'Dates for this workshop have not been finalized. Join the waitlist to get notified as soon as the dates are set.'
  return (
    <div style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.cityName} style={{ backgroundImage: `url(${imgSrc})` }}>{props.city || ''}</h2>
        <p className={styles.description}>
          {text}
        </p>
        <Button href={props.link} kind='red'>
          Join Waitlist
        </Button>
      </div>
    </div>
  )
}

export default WorkshopSection
