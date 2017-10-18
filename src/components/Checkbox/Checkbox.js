import React, { PropTypes } from 'react'
import styles from './Checkbox.css'
// 😻 http://codepen.io/DavidWells/pen/PzvEWa

const propTypes = {
  children: PropTypes.any,
  checked: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
}

const Check = ({ name, label }) => {
  const value = label
  return (
    <div className={styles.checkbox}>
      <input type='checkbox' id={name} name={name} value={value} />
      <div className={styles.check} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

Check.propTypes = propTypes

export default Check
