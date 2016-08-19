import React, {Component, PropTypes} from 'react'
import styles from './ContentBlock.css'

const propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  image: PropTypes.string,
}
export default class ContentBlock extends Component {

  render () {
    const { color, style, title, image } = this.props
    const imageSrc = image || 'http://www.fillmurray.com/200/200'
    const colorStyle = styles[color] || ''
    return (
      <section style={style} className={styles.wrapper + ' ' + colorStyle}>
        <div className={styles.inner}>
          <a href='' className={styles.image}>
            <img src={imageSrc} alt='' />
          </a>
          <div className={styles.content}>
            <h2 className='major'>{title}</h2>
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}

ContentBlock.propTypes = propTypes
