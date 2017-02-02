import React from 'react'
// import FeedbackModal from '../../fragments/FeedbackModal'
import FooterBetaCTA from '../../fragments/FooterBetaCTA'
import styles from './index.css'

const Footer = (props) => {
  let cta
  if (typeof window !== 'undefined') {
    const url = window.location.pathname
    if (url === '/blog/' || url === '/' || url.match(/\/docs\//) || url.match(/\/framework\//)) {
      cta = <FooterBetaCTA />
    }
  }
  const year = new Date().getFullYear()
  return (
    <footer id='footer' className={styles.footer}>
      <div>
        {cta}
      </div>
      <div className={styles.footerLinks}>
        <a href={'https://serverless.com'} className={styles.link}>
          <span className={styles.reference}>
            {`Serverless, Inc. © ${year}`}
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
