import React from 'react'
import Page from '../../layouts/Default'
import styles from './Framework.css'
import Button from '../../components/Button/Button'

export default class PartnersPage extends React.Component {

  render () {
    return (
      <Page {...this.props} >
        <br />
        <div className={styles.header}>
          <h1 className='center'>What is the Serverless Framework?</h1>
          <p className='center'>The Serverless Framework is the world’s leading software development framework for building serverless architectures.</p>
        </div>
        <hr />
        <div className={styles.header}>
          <h1 className='center'>What is serverless?</h1>
          <p className='center'>Serverless is a cloud architectural design pattern that abstracts servers away to the point that developers have little to no direct interaction with them. Serverless providers (e.g. AWS Lambda) remove servers from the equation by providing an event-driven, pay-per-execution compute service.</p>
        </div>
        <iframe className='center' frameBorder='0' scrolling='no' marginHeight='0'
          marginWidth='0'
          width='780' height='443' type='text/html' src='https://www.youtube.com/embed/weOsx5rLWX0?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com'>
          <div>
            <small>
              <a href='http://youtubeembedcode.com/en/'>Quickly embed a YouTube video onto your website or blog!
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href='https://googlemapsgenerator.com'>Let your customers know where you are!
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href='http://youtubeembedcode.com/en/'>Quickly embed a YouTube video onto your website or blog!
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href='https://googlemapsgenerator.com/fr/'>Embed a map onto your site!
              </a>
            </small>
          </div>
        </iframe>
        <div className={styles.button}>
          <Button className={styles.button} kind='black' href='https://serverless.com/framework/docs/guide/' target='_blank'>Get Started
          </Button>
        </div>
        <hr />
        <h2 className={styles.header}>Why Use The Framework</h2>
        <div className={styles.componentBox}>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/flash.svg' />
            <h3>Move Fast</h3>
            <p>Provision and deploy a REST API, data pipe-line, or one of many other use cases in minutes.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/signs.svg' />
            <h3>Simplicity</h3>
            <p>Our CLI makes it simple to manage and build a serverless architecture by abstracting away provider-level complexity.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/time-is-money.svg' />
            <h3>100% Utilization</h3>
            <p>Pay when your code runs, so you never have to worry about paying for idle server time.
            </p>
          </div>
        </div>
        <div className={styles.componentBox}>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/handshake.svg' />
            <h3>Collaboration</h3>
            <p>We provide a flexible application structure for easy management of code, resources, and events across large projects & teams.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/profile.svg' />
            <h3>Community</h3>
            <p>Serverless is an MIT open-source project, actively maintained by a vibrant and engaged community of developers.
            </p>
          </div>
          <div className={styles.component}>
            <img role='presentation' src='https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/icons/controls.svg' />
            <h3>Infinite Scaleability</h3>
            <p>Framework users are reacting to billions of events per month on AWS Lambda infrastructure.
            </p>
          </div>
        </div>
        <div className={styles.button}>
          <Button kind='black' href='https://serverless.com/framework/docs/guide/' target='_blank'>Get Started
          </Button>
        </div>
        <br />
      </Page>
    )
  }
}
