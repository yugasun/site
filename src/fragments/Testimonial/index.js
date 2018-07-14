import React from 'react'
import styles from './Testimonial.css'
import cocacola from '../../assets/images/cocacola-logo.png'

export default class extends React.Component {
  render(){
    return (
<div className={styles.redHighlightWrapper}>
<div className={styles.container}>
  <div className={styles.redHighlightContainer}>
    <blockquote>"The Serverless Framework is a core component of The Coca-Cola Company's initiative to reduce IT operational costs and deploy services faster."</blockquote>
    <div className={styles.quoteDetails}>
      <div className={styles.info}>
        <div className={styles.name}>Patrick Brandt</div>
        <div className={styles.designation}>Solutions Architect at The Coca-Cola Company</div>
      </div>
      <div className={styles.companyLogo}><img src={cocacola} alt="" /></div>
    </div>
  </div>
</div>
</div>
    )
  }
}

