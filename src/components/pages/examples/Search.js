import React from 'react'
import styled from 'styled-components'

import { Box, Text, Card, DropDown, TextField, Button, Flex, OptionWrapper, Image, ResponsiveStack } from 'serverless-design-system'

import searchIcon from 'src/assets/images/search-icon.svg'
import { platform } from 'os'

const SearchFieldWithIcon = styled(TextField)`
    background: url(${searchIcon}) no-repeat;
    background-position: right 15px center;
    padding-left: 30px;
    background-color: white;
    background-size: 17.5px;
`

export default class Search extends React.Component {

  constructor (props){
      super(props)
      this.state = {
        filter: {},
        platformPlaceholder: "platform",
        languagePlaceholder: "language",
        frameworkPlaceholder: "framework"
      }
  }

  state = { isSearchBarActive: false }


  toggleSearchBar = () => {
   
  }

  filterSearchResults = (category, {value, label}) => {
    const placeholderKey = `${category}Placeholder`
    this.setState({
      [placeholderKey] : label
    })

    const updatedFilterObj = this.state.filter
    updatedFilterObj[category] = value
    this.setState({
      filter: updatedFilterObj
    })

    this.props.refreshResults(this.state.filter)
  } 

  render() { 
    return (
    <Card
      border='1px solid #5b5b5b'
      m={[2]}
      mt={5}
    >
    <ResponsiveStack>

    
    <Box mx={2}>
      <DropDown
        fieldContainerProps={{
          border: 'none',
          minWidth: '175px'
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'AWS', value: 'aws' },
            { label: 'Google Cloud', value: 'gcp' },
            { label: 'Azure', value: 'azure' },
        ]}
        value = {this.state.platformPlaceholder}
        onChange={this.filterSearchResults.bind(this, 'platform')}
        />
      </Box>
      <Box mx={2}>
      <DropDown
        fieldContainerProps={{
          border: 'none',
          minWidth: '175px'
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'nodeJS', value: 'node' },
            { label: 'Go', value: 'go' },
        ]}
        value = {this.state.languagePlaceholder}
        onChange={this.filterSearchResults.bind(this, 'language')}
        />
      </Box>
      <Box mx={2}>
      <DropDown
        fieldContainerProps={{
          border: 'none',
          minWidth: '175px'
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'v1', value: 'v1' },
            { label: 'v2', value: 'v2' },
        ]}
        value = {this.state.frameworkPlaceholder}
        onChange={this.filterSearchResults.bind(this, 'framework')}
        />
      </Box>
      <SearchFieldWithIcon
        placeholder='Search for an example'
        height={50}
        width='100%'
        border='none'
        fontSize={2}
        fontFamily='Serverless'
        style={{borderLeft:'1px solid #5b5b5b'}}
        placeholderColor='#8c8c8c'
        px={2}
      />
      </ResponsiveStack>
    </Card>
    
)

      }
    }