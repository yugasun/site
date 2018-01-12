import React from 'react'
import styles from './styles.css'

const GridSection = (props) => {
  const items = props.items || []

  const gridItems = items.map((item) => {
    return (
      <div className={styles.feature}>
        <h3 className={styles.featureTitle}>
          {item.title}
        </h3>
        <p>
          {item.text}
        </p>
      </div>
    )
  })

  return (
    <div className={styles.bound}>
      <div className={styles.sectionFeatures}>
        {gridItems}
      </div>
    </div>
  )
}

export default GridSection
