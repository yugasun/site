import React, { PropTypes } from 'react'
import AutoForm from 'react-auto-form'

function fixScroll(){
  // http://bit.ly/2gQ6jFJ
  this.scrollIntoView(false)
}

export default class Form extends React.Component {
  componentDidMount() {
    const list = this.node.querySelectorAll('input,select,textarea');
    for (var i = 0; i < list.length; i++) {
      list[i].addEventListener('invalid', fixScroll)
    }
  }
  componentWillUnmount() {
    const list = this.node.querySelectorAll('input,select,textarea');
    for (var i = 0; i < list.length; i++) {
      list[i].removeEventListener('invalid', fixScroll)
    }
  }

  render() {
    const { onSubmit, onChange, trimOnSubmit, children } = this.props
    return (
      <div ref={(node) => { this.node = node }}>
        <AutoForm className='form-node' trimOnSubmit={trimOnSubmit} onChange={onChange} onSubmit={onSubmit}>
          {children}
        </AutoForm>
      </div>
    )
  }
}


Form.propTypes = {
  children: PropTypes.any,
  // event, name, data, change
  onChange: PropTypes.func,
  // event, data
  onSubmit: PropTypes.func,
  // onBlur: PropTypes.func,
  // onFocus: PropTypes.func,
  // onKeyPress: PropTypes.func,
}
