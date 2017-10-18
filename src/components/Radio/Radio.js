import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Radio.css'
import classnames from 'classnames'

const radioFactory = (props) => {
  return (<span></span>)
}

const factory = (Radio) => {
  class RadioButton extends Component {
    static propTypes = {
      checked: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
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

    handleClick = (event) => {
      const { checked, disabled, onChange } = this.props
      if (event.pageX !== 0 && event.pageY !== 0) this.blur()
      if (!disabled && !checked && onChange) onChange(event, this)
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
