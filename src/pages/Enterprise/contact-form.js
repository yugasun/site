import React from 'react';
import Dropdown from 'react-dropdown';
import './dropdown.css';

import styles from './Enterprise.css';

class ContactForm extends React.Component {
  render() {
    console.log(Dropdown);
    return (
      <form>
        <div className={styles.formGroup}>
          <input
            type='email'
            placeholder='Email'
            className={styles.formField}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.formInputGroup}`}>
          <input
            type='text'
            placeholder='First Name'
            className={styles.formField}
          />
          <input
            type='text'
            placeholder='Last Name'
            className={styles.formField}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type='text'
            placeholder='Company Name'
            className={styles.formField}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            How is your company currently using the Serverless Framework?
          </label>
          <Dropdown
            options={[
              { label: 'In Development', value: 'In Development' },
              { label: 'In Production', value: 'In Production' },
              { label: 'Not at all', value: 'Not at all' }
            ]}
            className={styles.input}
            onChange={this._onSelect}
            placeholderClassName={styles.placeholder}
            placeholder="Select"
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            How many developers in your organization plan on doing serverless development?
          </label>
          <Dropdown
            options={[
              { label: 'Less than 5', value: 'Less than 5' },
              { label: '5 - 15', value: '5 - 15' },
              { label: '15 - 30', value: '15 - 30' },
              { label: '30 - 100', value: '30 - 100' },
              { label: '100 +', value: '100 +' }
            ]}
            className={styles.input}
            onChange={this._onSelect}
            placeholderClassName={styles.placeholder}
            placeholder="Select"
          />
        </div>
        <div className={`${styles.formGroup} ${styles.formInputGroup}`}>
          <label>
            Which infrastructure providers you are utilizing with the Serverless Framework?
          </label>
          <div className={styles.inputContainer}>
            <label className={styles.formField}>
              <input
                type='radio'
                className={styles.radioBtn}
                value='AWS'
                name='infrastructure'
              />
              AWS
            </label>
            <label className={styles.formField}>
              <input
                type='radio'
                className={styles.radioBtn}
                value='Google Cloud Platform'
                name='infrastructure'
              />
              Google Cloud Platform
            </label>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.formField}>
              <input
                type='radio'
                className={styles.radioBtn}
                value='Microsoft Azure'
                name='infrastructure'
              />
              Microsoft Azure
            </label>
            <label className={styles.formField}>
              <input
                type='radio'
                className={styles.radioBtn}
                value='Other'
                name='infrastructure'
              />
              Other
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <textarea
            placeholder='Please describe your Serverless use-case and any goals your team has with Serverless.'
            className={styles.formField}
          />
        </div>
      </form>
    );
  }
}

export default ContactForm;
