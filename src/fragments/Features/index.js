import React from 'react';
import commonStyles from './../common.css';
import styles from './style.css';

export default ({ features }) => (
  <div className={styles.featuresListWrapper}>
    <h2 className={commonStyles.textCenter}>Features</h2>
    <ol className={styles.featureList}>
      {
        features.map((feature) => (
          <li key={feature.title}>
            <figure>
              <img src={feature.image} alt={feature.title} />
            </figure>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))
      }
    </ol>
  </div>
);

