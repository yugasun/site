import React, { Component } from 'react'
import { Link } from 'react-router'

export default class BreadcrumbItem extends Component {
  render () {
    return (
      <Link to={this.props.getUrlFromPathSegments(this.props.pathSegments)}>
        {this.props.label}
      </Link>
    )
  }
}

BreadcrumbItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  pathSegments: React.PropTypes.array.isRequired,
  getUrlFromPathSegments: React.PropTypes.func,
}
