import React from 'react'
import Carousel from './Carousel'
import Item from './Item'

const HighlightedBlogs = ({ blogs }) => (
  <Carousel>
    { blogs.map((blog, index) => (<Item {...blog} key={`highlighted-${index}`} />)) }
  </Carousel>
)

export default HighlightedBlogs