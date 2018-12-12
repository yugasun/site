import React from 'react'
import BlogPreview from "src/components/pages/blog/Preview"

export default ({ blogs }) => (
  <React.Fragment>
    <BlogPreview blogs={blogs} />
  </React.Fragment>
)
