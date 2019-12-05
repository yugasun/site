import React from 'react'
import Featured from './Featured'
import OtherHighlighted from './OtherHighlighted'

const HighlightedBlogs = ({ blogs }) => (
    <div style={{flexDirection: 'row', marginTop: '92px', display: 'flex'}}>
      <Featured blog={blogs[0]}/>
      <OtherHighlighted blogs={blogs}/>
    </div>
)

export default HighlightedBlogs