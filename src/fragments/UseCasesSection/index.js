import React from 'react'
import styles from './style.css';

const UseCasesSection = ({ title, description, usecases }) => (
  <div className={styles.useCasesWrapper}>
    <div className={styles.useCasesIntro}>
      <h2 className={styles.textCenter}>
        {title}
      </h2>
      <p className={styles.textCenter}>
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
              <div className={styles.btnWrapper}>
                <a className={ `${styles.btn} ${styles.btnPrimary}` }>view example</a>
              </div>
            </div>
            <div className={styles.useCaseImage}>
              <img src={usecase.image} alt="" />
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

export default UseCasesSection;
