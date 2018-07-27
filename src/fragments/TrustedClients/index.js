import React from 'react';

import ea from '../../assets/images/ea-logo.png'
import cocacolaLogo from '../../assets/images/cocacola-logo.png'
import nordstrom from '../../assets/images/nordstrom-logo.png'
import expedia from '../../assets/images/expedia-logo.png'
import reuters from '../../assets/images/reuters-logo.png'

import commonStyles from '../common.css';
import styles from './styles.css';

export default () => (
  <div className={`${styles.clientsWrapper} ${styles.footerPrevPad} ${styles.patternSectionWrapper} ${styles.newSite}`}>
    <div className={`${styles.clientContainer} ${commonStyles.container} ${styles.trustedByContainer}`}>
      <h4>Serverless Platform is trusted by</h4>
      <ul className={`${styles.clientList} ${styles.trustedBy}`}>
        <li><img src={ea} alt='Electronic Arts' /></li>
        <li><img src={cocacolaLogo} alt='Coca Cola' /></li>
        <li><img src={nordstrom} alt='Nordstorm' /></li>
        <li><img src={expedia} alt='Expedia' /></li>
        <li><img src={reuters}  alt='Reuters' /></li>
      </ul>
    </div>
  </div>
);
