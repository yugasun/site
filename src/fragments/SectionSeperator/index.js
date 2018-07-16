import React from 'react';
import styles from './style.css';

export default ({ className }) => (
  <div className={`${styles.greySectionSeperator} ${className}`}></div>
);