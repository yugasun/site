import React from 'react'

export default class Resource extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
  };

  render () {
    const params = this.props.params
    return (
      <div>
       {params.id}
      </div>
    )
  }
}
