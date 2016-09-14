import React, { PropTypes } from 'react'
import styles from './Block.css'

const propTypes = {
  children: PropTypes.any,
}

export default function Block ({children, ...props}) {
  return (
    <div className={styles.cta} {...props}>
      {children}
    </div>
  )
}

Block.propTypes = propTypes
