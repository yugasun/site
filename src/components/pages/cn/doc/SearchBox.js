import React from 'react'
import { Box, TextField } from 'serverless-design-system'

export default class SearchBox extends React.Component {
  componentDidMount() {
    this.initializeSearch()
  }

  initializeSearch = () => {
    if (typeof docsearch !== 'undefined') {
      docsearch({ // eslint-disable-line
        apiKey: 'd5a39b712b86965d93534207ef5423df',
        indexName: 'serverless',
        inputSelector: '#algolia-search',
        debug: false // set to true to style search box
      })
    } else {
      setTimeout(() => {
        this.initializeSearch()
      }, 50)
    }
  }

  render() {
    return (
      <Box className='searchBumper'>
        <Box className='searchWrapper'>
          <TextField
            className='searchBox'
            id='algolia-search'
            placeholder='&#9889;  Search docs'
          />
        </Box>
      </Box>
    )
  }
}
