import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Radio.css'
import classnames from 'classnames'

const radioFactory = (props) => {
  // custom renderer for future use
  return (<span></span>)
}

const factory = (Radio) => {
  class RadioButton extends Component {
    static propTypes = {
      checked: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      required: PropTypes.bool,
      disabled: PropTypes.bool,
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
      name: PropTypes.string,
      onBlur: PropTypes.func,
      onChange: PropTypes.func,
      onFocus: PropTypes.func,
      onMouseEnter: PropTypes.func,
      onMouseLeave: PropTypes.func,
      value: PropTypes.string,
    }

    static defaultProps = {
      checked: false,
      className: '',
      disabled: false,
    }

    firstOnChangeFired = false

    handleClick = (e) => {
      const { checked, disabled, onChange, name, value, isAutoForm, isStateless } = this.props

      if (isAutoForm && !this.firstOnChangeFired) {
        /* when using AutoForm onchange handled gets removed on re-render.
          Attach onChange handler to RadioGroup directly */
        this.firstOnChangeFired = true
        return false
      }

      if (event.pageX !== 0 && event.pageY !== 0) {
        this.blur()
      }

      if (isStateless && onChange) {
        // for autoForm. just use DOM
        return onChange(e, name, value, { [`${name}`]: value } )
      }
      if (!disabled && !checked && onChange) {
        // e, name, data, change
        return onChange(e, name, value, { [`${name}`]: value } )
      }
    }

    blur() {
      if (this.inputNode) {
        this.inputNode.blur()
      }
    }

    focus() {
      if (this.inputNode) {
        this.inputNode.focus()
      }
    }

    render() {
      const {
        checked,
        children,
        className,
        disabled,
        label,
        name,
        onChange, // eslint-disable-line
        onMouseEnter,
        onMouseLeave,
        isStateless, // use dom values
        required,
        ...others
      } = this.props
      const _className = classnames(this.props.disabled ? 'disabled' : 'field', className)

      let setChecked = checked

      if (isStateless) {
        // for autoForm. just use DOM
        setChecked = null
      }

      return (
        <label
          className={_className + ' ' + styles.label}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <input
            {...others}
            checked={setChecked}
            className={'lol'}
            disabled={disabled}
            name={name}
            onChange={() => {}}
            onClick={this.handleClick}
            ref={(node) => { this.inputNode = node }}
            type='radio'
            required={required}
          />
          <Radio checked={checked} disabled={disabled} />
          {label ? <span className={styles.labelText}>{label}</span> : null}
          {children}
        </label>
      )
    }
  }

  return RadioButton
}

const RadioButton = factory(radioFactory)
export default RadioButton