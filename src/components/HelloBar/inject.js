import React, { PropTypes } from 'react' // eslint-disable-line
import ActivableRenderer from '../ActivableRenderer/ActivableRenderer'
import HelloBarInsert from './index'

const factory = (HelloBar) => {
  const Bar = (props) => {
    return (
      <HelloBar active={props.active}>
        {props.children}
      </HelloBar>
    )
  }
  Bar.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any,
  }

  return ActivableRenderer()(Bar)
}

const HelloBar = factory(HelloBarInsert)

export default HelloBar
