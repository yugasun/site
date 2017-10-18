import React from 'react'
import styles from './Section.css'
import Button from '../../components/Button'

const WorkshopSection = (props) => {
  const imgSrc = props.img || 'http://www.fillmurray.com/740/110'
  const text = props.text || 'Dates for this workshop have not been finalized. Join the waitlist to get notified as soon as the dates are set.'
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={imgSrc} />
      </div>
      <p className={styles.title}>
        {text}
      </p>
      <Button href={props.link} kind='red'>
        Join Waitlist
      </Button>
    </div>
  )
}

export default WorkshopSection
