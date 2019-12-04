import React from 'react'
import Featured from './Featured'
import OtherHighlighted from './OtherHighlighted'
import { AppContainer } from 'src/components'

const HighlightedBlogs = ({ blogs }) => (
  <AppContainer>
    <div style={{flexDirection: 'row', marginTop: '92px', display: 'flex'}}>
      <Featured blog={blogs[0]}/>
      <OtherHighlighted blogs={blogs}/>
    </div>
  </AppContainer>
)

export default HighlightedBlogs