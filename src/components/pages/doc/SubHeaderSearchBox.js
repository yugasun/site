import React from 'react'
import { TextField, Flex, Background } from 'serverless-design-system'
import styled from 'styled-components'
import searchIcon from 'src/assets/images/search-icon.svg'
import searchActiveIcon from 'src/assets/images/search-icon-active.svg'

const DocsSearchField = styled(TextField)`
  letter-spacing: 0.4px;
  background: url(${searchIcon}) no-repeat;
  background-position: right 15px center;
  background-size: 17.5px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 4px;
  background-position-y: 10px;
  padding-top: 6px;

  @media screen and (max-width: 767px) {
    border-left: none;
  }

  @media screen and (max-width: 412px) {
    border: none;
  }
`

export default class SearchBox extends React.Component {
  componentDidMount() {
    this.initializeSearch()
  }

  initializeSearch = () => {
    if (typeof docsearch !== 'undefined') {
      docsearch({
        // eslint-disable-line
        apiKey: 'd5a39b712b86965d93534207ef5423df',
        indexName: 'serverless',
        inputSelector: '#algolia-top-search',
        debug: false, // set to true to style search box
      })
    } else {
      setTimeout(() => {
        this.initializeSearch()
      }, 50)
    }
  }

  render() {
    return (
      <Flex width={1}>
        <DocsSearchField
          placeholder='Search documentation'
          height={36}
          width='100%'
          border='none'
          fontSize={14}
          fontFamily='Soleil'
          placeholderColor='#8c8c8c'
          px={[1, 1, 2]}
          id='algolia-top-search'
          className='searchBox'
          color='#8c8c8c'
        />
      </Flex>
    )
  }
}
