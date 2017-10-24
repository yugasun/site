import React from 'react'
import Default from '../../layouts/Default'
import { Link } from 'react-router'
import Section from './Section'
import styles from './WorkShops.css'

const imgBase = 'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/workshops/'

export default class WorkShops extends React.Component {
  static hasLoadingState = true
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Default
        className={styles.enterprise}
        {...this.props}
        fullWidth
        prefetches={[
          `${imgBase}san-francisco.jpg`,
          `${imgBase}seattle.jpg`,
          `${imgBase}new-york.jpg`,
          `${imgBase}atlanta.jpg`,
          `${imgBase}london.jpg`,
        ]}
      >
        <div className={styles.hero}>
          <div className={styles.boundMedium}>
            <h1 className={styles.heroTitle}>Upcoming Serverless Workshops</h1>
            <p className={`${styles.heroDescription}`}>
              Serverless Developer Workshops are a full day focused on providing training and guidance for serverless development, testing, security and operations. These workshops are most valuable  for developers  and technology leaders who are aiming to operationalize serverless across their organization. Join a waitlist below.
            </p>

            <p className={`${styles.heroDescription} ${styles.center}`}>
              Priced at $1095 per person. For private workshops please email workshops@serverless.com
            </p>
          </div>
        </div>
        <div>
          <div className={styles.cityLinks}>
            <Link to='/workshops/san-francisco'>
              San Francisco
            </Link>
            <Link to='/workshops/seattle'>
              Seattle
            </Link>
            <Link to='/workshops/new-york'>
              New York City
            </Link>
            <Link to='/workshops/atlanta'>
              Atlanta
            </Link>
            <Link to='/workshops/london'>
              London
            </Link>
          </div>
          <Section link='/workshops/san-francisco' city='San Francisco' backgroundImage={`${imgBase}sf-hero.jpg`} />
          <Section link='/workshops/seattle' city='Seattle' backgroundImage={`${imgBase}seattle-hero.jpg`} />
          <Section link='/workshops/new-york' city='New York' backgroundImage={`${imgBase}new-york-hero.jpg`} />
          <Section link='/workshops/atlanta' city='Atlanta' backgroundImage={`${imgBase}atlanta-hero.jpg`} />
          <Section link='/workshops/london' city='London' backgroundImage={`${imgBase}london-hero.jpg`} />
        </div>
      </Default>
    )
  }
}
