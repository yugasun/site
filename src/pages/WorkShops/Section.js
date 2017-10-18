import React from 'react'
import styles from './Section.css'
import Button from '../../components/Button'

const WorkshopSection = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src='http://www.fillmurray.com/740/110' />
      </div>
      <p className={styles.title}>
        Dates for this workshop have not been finalized. Join the waitlist to get notified as soon as the dates are set.
      </p>
      <Button href={props.link} kind='red'>
        Join Waitlist
      </Button>
    </div>
  )
}

export default WorkshopSection
