import React, {PropTypes} from 'react'
import { Link } from 'react-router'
import NewsletterCTA from '../../fragments/NewsletterCTA'
import styles from './sidebar.css'

const propTypes = {
  children: PropTypes.any
}

const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.aboutBlog}>
        <h2><Link to='/blog'>Serverless Blog</Link></h2>
        <h3>The blog on serverless and event driven compute</h3>
      </div>

      <div className={styles.getStarted}>
        <h3>New to serverless?</h3>
        <p>Run the following commands to get started today</p>
        <code>
          npm install serverless -g
        </code>
      </div>

      <div className={styles.quickLinks}>
        <h2>Quick Links</h2>
        <div className={styles.sidebarLinks}>
          <Link to='/framework/docs'>
            Serverless documentation
          </Link>
        </div>
        <div className={styles.sidebarLinks}>
          <a href='https://gitter.im/serverless/serverless' target='_blank' rel='noopener noreferrer'>
            Chat in Gitter
          </a>
        </div>
        <div className={styles.sidebarLinks}>
          <a href='http://forum.serverless.com' target='_blank' rel='noopener noreferrer'>
            Ask Questions on the Forum
          </a>
        </div>
      </div>
      <NewsletterCTA style={{ marginBottom: '20px' }} black={true} />
    </div>
  )
}

export default Sidebar
