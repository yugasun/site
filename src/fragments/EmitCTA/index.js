import React from 'react'
import EmitLogo from '../../assets/images/emit-logo.png'
import styles from './EmitCTA.css'

const EmitCTA = (props) => {
  return (
    <div className={styles.banner} style={props.style}>
      <div className={styles.wrapper}>
        <a className={styles.logoWrapper} href='http://www.emitconference.com/' target='_blank'>
          <img alt='Emit Conference logo' src={EmitLogo} draggable='false' className={styles.logo} />
        </a>
        <span className={styles.copy}>
          August 17: the conference on event-driven architectures.
        </span>
        <a className={styles.link} href='http://www.emitconference.com/' target='_blank'>
          Learn more
        </a>
      </div>
    </div>
  )
}

export default EmitCTA
