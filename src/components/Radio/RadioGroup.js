import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InjectRadioButton from './Radio'

const factory = (RadioButton) => {
  class RadioGroup extends Component {
    static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      onChange: PropTypes.func,
      value: PropTypes.string,
    }

    static defaultProps = {
      className: '',
      disabled: false,
    }

    handleChange = (value, event) => {
      // alert('change it')
      if (this.props.onChange) this.props.onChange(value, event)
    }

    renderRadioButtons() {

      const { children, disabled, isStateless, id, label } = this.props

      let name = id
      if (!name && label) {
        name = label.toLowerCase().replace(/ /g,"_")
      }

      return React.Children.map(children, child => {
        // console.log('child', child)
        if (child && child.type && child.type.displayName !== 'RadioButton') {
          return child
        }

        return React.cloneElement(child, {
          // checked: child.props.value === this.props.value,
          disabled: disabled || child.props.disabled,
          onChange: this.handleChange.bind(this, child.props.value),
          name: name,
          isStateless: isStateless || child.props.isStateless,
        })
      })
    }

    render() {
      return (
        <div className={this.props.className}>
          {this.renderRadioButtons()}
        </div>
      )
    }
  }

  return RadioGroup
}

const RadioGroup = factory(InjectRadioButton)
export default RadioGroup
