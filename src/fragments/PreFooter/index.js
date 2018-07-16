import React from 'react'
import styles from './../Footer/index.css'
import commonStyles from './../common.css'
import { Link } from 'react-router'

const PreFooter = ({ heading, descriptions, links }) => (
  <div className={`${styles.footerHighlight} ${commonStyles.newSite}`}>
    <div className={styles.fhighText}>
      <h2 className={commonStyles.white}>{heading}</h2>
      {
        descriptions.map((description, index) => (
          <p className={commonStyles.white} key={index}>{description}</p>
        ))
      }
    </div>
    <div className={styles.fhighLinks}>
      <ul>
        {
          links.map((link) => (
            <li key={link.title}>
              <Link to={link.url}
                className={`${commonStyles.btn} ${styles.btn} ${commonStyles.btnTransparentWhite}`}>
                {link.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)

export default PreFooter
