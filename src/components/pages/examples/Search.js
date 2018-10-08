import React from 'react'
import styled from 'styled-components'

import { Box, Text, Card, DropDown, TextField, Button, Flex, OptionWrapper, Image, ResponsiveStack } from 'serverless-design-system'

import searchIcon from 'src/assets/images/search-icon.svg'
import { platform } from 'os'

const TextFieldWithIconAndNoOutline = styled(TextField)`
    background: url(${searchIcon}) no-repeat;
    background-position: right 15px center;
    padding-left: 30px;
    background-color: white;
    background-size: 17.5px;

    &:focus, &:active {
      outline: none;
    }
`

export default class Search extends React.Component {

  constructor (props){
      super(props)
      this.state = {
        filter: {
          platform: props.selectedOptions.platform,
          language: props.selectedOptions.language,
          framework: props.selectedOptions.framework,
          title: props.selectedOptions.search
        },
      }
  }
  //TODO - is it search or title?

  state = { isSearchBarActive: false }


  toggleSearchBar = () => {
   
  }

  filterSearchResults = (category, {label}) => {
    const updatedFilterObj = this.state.filter
    updatedFilterObj[category] = label === 'Any' ? null: label
    this.updateFilterAndRefreshResults(updatedFilterObj)
  } 

  handQueryFilter = (e) => {
    const updatedFilterObj = this.state.filter
    updatedFilterObj.title = e.target.value 
    this.updateFilterAndRefreshResults(updatedFilterObj)
  }

  updateFilterAndRefreshResults = (updatedFilterObj) => {
    this.setState({
      filter: updatedFilterObj
    })
    this.props.refreshResults(updatedFilterObj)
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
        placeholder='platform'
        fieldContainerProps={{
          border: 'none',
          minWidth: '175px'
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'Any', value: 'any'},
            { label: 'AWS', value: 'aws' },
            { label: 'Google Cloud', value: 'gcp' },
            { label: 'Azure', value: 'azure' },
            { label: 'OpenWhisk', value: 'openwhisk'},
            { label: 'Kubeless', value: 'kubeless'}
        ]}
        value = {this.state.filter.platform}
        onChange={this.filterSearchResults.bind(this, 'platform')}
        />
      </Box>
      <Box mx={2}>
      <DropDown
      placeholder='language'
        fieldContainerProps={{
          border: 'none',
          minWidth: '175px'
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'Any', value: 'any'},
            { label: 'nodeJS', value: 'node' },
            { label: 'Go', value: 'go' },
            { label: 'Python', value: 'python'},
            { label: 'Swift', value: 'swift'},
            { label: 'Java', value: 'java'},
            { label: 'PHP', value: 'php'}
        ]}
        value = {this.state.filter.language}
        onChange={this.filterSearchResults.bind(this, 'language')}
        />
      </Box>
      <Box mx={2}>
      <DropDown
        placeholder='framework'
        fieldContainerProps={{
          border: 'none',
          minWidth: '175px'
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'Any', value: 'any'},
            { label: 'v1', value: 'v1' },
        ]}
        value = {this.state.filter.framework}
        onChange={this.filterSearchResults.bind(this, 'framework')}
        />
      </Box>
      <TextFieldWithIconAndNoOutline
        placeholder='Search for an example'
        height={50}
        width='100%'
        border='none'
        fontSize={2}
        fontFamily='Serverless'
        style={{borderLeft:'1px solid #5b5b5b'}}
        placeholderColor='#8c8c8c'
        px={2}
        onChange={this.handQueryFilter}
      />
      </ResponsiveStack>
    </Card>
    
)

      }
    }