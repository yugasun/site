import React from 'react'
import styles from './styles.css'

const Subscribe = props => (
  <div className={ styles.container }>
    <div>
      <div style={{ backgroundColor: props.redBackground ? 'rgba(253, 87, 80, .95)' : 'rgba(255, 255, 255, .95)' }}>
        <div>
          <div
            className={ styles.text }
            style={{ color: props.redBackground ? '#fff' : '#000' }}
          >{ `Join 12,000+ other serverless devs & keep up to speed on the latest serverless trends.` }</div>
        </div>
        <div>
          <div className={ styles.enterEmail }>
            <div>
              <input
                style={{ backgroundColor: props.redBackground ? '#fff' : null }}
                className={ styles.input }
                name='email'
                type='email'
                placeholder='enter email address'
                required
              />
              <div
                style={{
                  backgroundColor: props.redBackground ? '#fff' : null,
                  color: props.redBackground ? '#fd5750' : null,
                  borderLeft: props.redBackground ? '1px solid #fd5750' : null
                }}
                className={ styles.button }
                onClick={ () => console.log('submit email') }
              >
                sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Subscribe
