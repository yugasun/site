import React, { PropTypes } from 'react'

import PagePreview from '../PagePreview'

const PagesList = ({ pages }) => {
  let renderer = 'No posts yet'
  if (pages.length) {
    renderer = (
      <ul>
      {pages.map((page) => (
        <li key={page.title}>
          <PagePreview {...page} />
        </li>
        ))}
      </ul>
    )
  }
  return (
    <div>
     {renderer}
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
