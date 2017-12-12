import React from 'react'
import styles from './styles.css'

const Separator = (props) => {
  const top = props.marginTop || props.margin || 0
  const bottom = props.marginBottom || props.margin || 0
  return (
    <span
      className={styles.separator}
      style={{
        marginTop: top,
        marginBottom: bottom
      }}
    >
      <span className={styles.icon} />
    </span>
  )
}

export default Separator
