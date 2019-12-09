import React from 'react'
import styles from './Button.module.css'

class Button extends React.Component {

  constructor(props) {
    super(props)

    this.renderButtonPrimary = this.renderButtonPrimary.bind(this)
  }

  componentDidMount() {}

  renderButtonPrimary() {
    return (
      <div className={styles.buttonPrimary}>
        {this.props.text}
      </div>
    )
  }

  render() {
    if (this.props.type === 'primary') {
      return this.renderButtonPrimary()
    } else {
      return (<div></div>)
    }
  }
}


export default Button
