import React from 'react'
import styles from './../Footer/index.css'
import commonStyles from './../common.css'
import { Link } from 'react-router'

const PreFooter = () => (
  <div className={styles.footerHighlight}>
    <div className={styles.fhighText}>
      <h2 className={commonStyles.white}>Next Steps</h2>
      <p className={commonStyles.white}>Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</p>
      <p className={commonStyles.white}>Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</p>
    </div>
    <div className={styles.fhighLinks}>
      <ul>
        <li>
          <Link to=''
            className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnTransparentWhite}`}>
            use cases
          </Link>
        </li>
        <li>
          <Link to=''
            className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnTransparentWhite}`}>
            comparisions
          </Link>
        </li>
        <li>
          <Link to=''
            className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnTransparentWhite}`}>
            case studies
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default PreFooter
