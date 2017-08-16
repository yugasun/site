import React from 'react'
import { Link } from 'react-router'
import styles from './index.css'

const Footer = (props) => {
  const year = new Date().getFullYear()
  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.bound}>
        <nav className={styles.navBlocks}>
          <div className={styles.navBlock}>
            <h4 className={styles.navTitle}>Toolkit</h4>
            <Link to='/framework/'>Serverless Framework</Link>
            <Link to='/event-gateway/'>Event Gateway</Link>
            <Link to='/platform/docs'>Serverless Platform</Link>
            <a href='https://github.com/serverless/guide'>Serverless Guide</a>
          </div>
          <div className={styles.navBlock}>
            <h4 className={styles.navTitle}>Work with us</h4>
            <Link to='/enterprise/'>Enterprise</Link>
            <Link to=''>Plugins</Link>
          </div>
          <div className={styles.navBlock}>
            <h4 className={styles.navTitle}>Talk to us</h4>
            <a href='https://gitter.im/serverless/serverless'>Gitter</a>
            <a href='https://forum.serverless.com/'>Forum</a>
            <a href='https://twitter.com/goserverless'>Twitter</a>
            <a href='https://www.facebook.com/serverless/'>Facebook</a>
            <a href='https://www.instagram.com/serverlessinc/'>Instagram</a>
          </div>
          <div className={styles.navBlock}>
            <h4 className={styles.navTitle}>About</h4>
            <Link to='/company/team'>Company</Link>
            <Link to='/blog/'>Blog</Link>
          </div>
        </nav>
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>It’s not too late - sign up for the Platform beta and we’ll let you know when it’s ready for prime time.</p>
          <Link className={styles.cta} to='/beta'>Platform beta</Link>
          <p className={styles.madeStatement}>Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Tennessee & Thailand.<br/><br/>
            Serverless, Inc. © {year}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
