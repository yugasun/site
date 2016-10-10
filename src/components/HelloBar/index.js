import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import { addAnimationEvent, removeAnimationEvent } from '../../utils/animations'
import styles from './HelloBar.css'

const propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default class HelloBar extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      show: true
    }
    this.animationCallback = this.animationCallback.bind(this)
  }
  componentDidMount () {
    addAnimationEvent(this.refs.hellobar, 'AnimationEnd', this.animationCallback)
    // setTimeout(() => {
    //   this.setState({
    //     show: false
    //   })
    // }, 2000)
  }
  componentWillUnmount () {
    removeAnimationEvent(this.refs.hellobar, 'AnimationEnd', this.animationCallback)
  }
  animationCallback (event) {
    // console.log('animationName', event.animationName)
    const node = this.refs.hellobar
    if (event.target !== node) {
      return false
    }
    if (event.animationName === 'flipInSimple') {
      node.style.display = 'none'
    }
  }
  handleClose = () => {
    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
    this.setState({
      show: false
    })
  }
  render () {
    const { style, className } = this.props
    const showOrHide = (this.state.show) ? styles.show : styles.hide
    const classes = classnames(
      styles.hellobar, // base class
      styles.fullWidth, // size
      styles.bounceFlip, // effect
      className, // prop based class
      showOrHide
    )
    return (
      <div ref='hellobar' className={classes} style={style}>
        <div className={styles.inner}>
          {this.props.children}
        </div>
        <span className={styles.close} onClick={this.handleClose}></span>
      </div>
    )
  }
}

HelloBar.propTypes = propTypes
