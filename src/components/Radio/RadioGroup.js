import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InjectRadioButton from './Radio'
import isInsideElement from '../../utils/isInsideElement'



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

    componentDidMount() {
      // console.log('this.node', this.node)
    }

    handleChange = (e, name, data, change) => {
      if (this.props.onChange) {
        // e, name, data, change
        this.props.onChange(e, name, data, change)
      }
    }

    renderRadioButtons() {

      const { children, disabled, isStateless, id, name, label, required } = this.props

      let childrenName = name
      if (!name && label) {
        childrenName = label.toLowerCase().replace(/ /g,"_")
      }

      const isAutoForm = (isInsideElement(this.node, 'form-node')) ? true : false

      // console.log('isAutoForm', isAutoForm)

      return React.Children.map(children, child => {
        // console.log('radio child', child)
        if (child && child.type && child.type.displayName !== 'RadioButton') {
          return child
        }

        const childProps = {
          checked: null, // Let DOM do its default thing
          required: required || child.props.required,
          disabled: disabled || child.props.disabled,
          onChange: this.handleChange,
          name: childrenName,
          isStateless: !this.props.value,
          isAutoForm: isAutoForm
        }

        // if value passed in from parent, manage the state in parent
        if (this.props.value) {
          childProps.checked = child.props.value === this.props.value
        }

        return React.cloneElement(child, childProps)
      })
    }

    render() {
      return (
        <div ref={(node) => { this.node = node }} className={this.props.className}>
          {this.renderRadioButtons()}
        </div>
      )
    }
  }

  return RadioGroup
}

const RadioGroup = factory(InjectRadioButton)
export default RadioGroup
