import React from 'react'
import styles from './Resource.css'

const Resource = (props) => {
  const params = props.params
  return (
    <div className={styles.page}>
      <h2>{'name of resource'}</h2>
      {params.id}
      <div>Image</div>
      <div>Tags</div>
    </div>
  )
}

Resource.propTypes = {
  params: React.PropTypes.object,
}

export default Resource
