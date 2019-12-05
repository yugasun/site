import React from 'react'
import Featured from './Featured'
import OtherHighlighted from './OtherHighlighted'
import styles from './HighlightedBlogs.module.css'

const HighlightedBlogs = ({ blogs }) => (
    <div className={styles.featuredBox}>
      <Featured blog={blogs[0]}/>
      <OtherHighlighted blogs={blogs}/>
    </div>
)

export default HighlightedBlogs