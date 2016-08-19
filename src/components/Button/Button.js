import React, { PropTypes } from 'react'
import styles from './Button.css' // eslint-disable-line

const propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.any,
  kind: PropTypes.oneOf(['dark', 'black']),
  style: PropTypes.object,
}

const defaultProps = {
  kind: 'dark',
}

export default function Button ({onClick, label, children, kind, style}) {
  const text = label || children
  const kindStyle = styles[kind]
  return (
    <button className={styles.btn + ' ' + kindStyle} onClick={onClick} style={style}>
      <span className={styles.background}></span>
      {text}
    </button>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
