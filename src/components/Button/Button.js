import React, { PropTypes } from 'react'
import styles from './Button.css' // eslint-disable-line

const propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  children: PropTypes.any,
  kind: PropTypes.oneOf(['dark', 'black']),
  style: PropTypes.object,
  /** if href provided to button, button will be a link */
  href: PropTypes.string,
  /** target of href */
  target: PropTypes.string,
}

const defaultProps = {
  kind: 'dark',
}

export default function Button ({onClick, label, children, kind, style, href, target}) {
  const text = label || children
  const kindStyle = styles[kind]
  if (href) {
    return (
      <a className={styles.btn + ' ' + kindStyle} href={href} target={target}
        onClick={onClick} style={style}>
        <span className={styles.background}></span>
        {text}
      </a>
    )
  } else {
    return (
      <button className={styles.btn + ' ' + kindStyle} onClick={onClick} style={style}>
        <span className={styles.background}></span>
        {text}
      </button>
    )
  }
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
