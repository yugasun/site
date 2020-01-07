import React from 'react'
import { TextField, Flex, Background } from 'serverless-design-system'
import styled from 'styled-components'
import searchIcon from 'src/assets/images/search-icon-gray.svg'

const DocsSearchField = styled(TextField)`
  letter-spacing: 0.4px;
  background: url(${searchIcon}) no-repeat;
  background-position: right 15px center;
  background-color: white;
  background-size: 17.5px;
  boxShadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08) 
  
  &:focus,
  &:active {
    outline: none;
  }

  @media screen and (max-width: 767px) {
    border-left: none;
  }

  @media screen and (max-width: 412px) {
    border: none;
  }
`

const DesktopBackground = styled(Background)`
  @media screen and (max-width: 1025px) {
    display: none;
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
        inputSelector: '#algolia-search',
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
      <DesktopBackground background='#f7f7f7'>
        <Flex width={0.79} mx='auto' mt={32} mb={32} pr={'7%'}>
          <DocsSearchField
            placeholder='Search documentation'
            height={50}
            width='100%'
            border='none'
            fontSize={14}
            fontFamily='Soleil'
            placeholderColor='#8c8c8c'
            px={[1, 1, 2]}
            id='algolia-search'
            className='searchBox'
          />
        </Flex>
      </DesktopBackground>
    )
  }
}
