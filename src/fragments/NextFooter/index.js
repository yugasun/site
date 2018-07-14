import React from 'react'
import styles from './NextFooter.css'
export default class extends React.Component {
  render(){
    return (
      <div className={styles.footer}>
      <div className={`${styles.footerContainer} ${styles.container}`}>
      <div className={`${styles.footerHighlight}`}>
        <div className={styles.fhighText}>
          <h2 className={styles.white}>Next Steps</h2>
          <p className={styles.white}>Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</p>
          <p className={styles.white}>Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</p>
        </div>
        <div className={styles.fhighLinks}>
          <ul>
            <li><a href='' className={`${styles.btn} ${styles.btnTransparentWhite}`}>use cases</a></li>
            <li><a href='' className={`${styles.btn} ${styles.btnTransparentWhite}`}>comparisions</a></li>
            <li><a href='' className={`${styles.btn} ${styles.btnTransparentWhite}`}>case studies</a></li>
          </ul>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

