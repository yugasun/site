import React from 'react'
import { Link } from 'react-router'

import commonStyles from './../common.css'
import styles from './style.css'

const UseCasesSection = ({ title, description, usecases }) => (
  <div className={styles.useCasesWrapper}>
    <div className={styles.useCasesIntro}>
      <h2 className={commonStyles.textCenter}>
        {title}
      </h2>
      <p className={commonStyles.textCenter}>
        {description}
      </p>
    </div>
    <div className={styles.usesCasesListWrapper}>
      {
        usecases.map((usecase) => (
          <div className={styles.useCaseItem} key={usecase.title}>
            <div className={styles.useCaseDetail}>
              <h3>{usecase.title}</h3>
              <div className={styles.info}>
                <p>{usecase.description}</p>
              </div>
              <div className={`${commonStyles.btnWrapper} ${styles.btnWrapper}`}>
                <Link to='/'
                  className={ `${commonStyles.btn} ${commonStyles.btnPrimary} ${styles.btn}` }>
                  view example
                </Link>
              </div>
            </div>
            <div className={styles.useCaseImage}>
              <img src={usecase.image} alt={usecase.title} />
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default UseCasesSection;
