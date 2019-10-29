import React from 'react'
import styled from 'styled-components'

import { Card, TextField, ResponsiveStack } from 'serverless-design-system'
import searchIcon from 'src/assets/images/search-icon.svg'

const PluginsSearchField = styled(TextField)`
  letter-spacing: 0.4px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px rgba(234, 234, 234, 0.3);
  font-size: 28px;
  height: 90px;
  padding: 10px 30px;
  text-align: center;
  border: 1px solid rgba(0,0,0,0.2);

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

export default class SearchField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: {},
    }
  }

  handQueryFilter = e => {
    const updatedFilterObj = this.state.filter
    updatedFilterObj.search = e.target.value
    this.setState({
      filter: updatedFilterObj,
    })
    this.props.refreshSearch(updatedFilterObj)
  }

  render() {
    return (
      <Card
        boxShadow='2px 2px 8px 0 rgba(0, 0, 0, 0.08)'
        mb={['8px', '8px', 22]}
        ml={[15, 15, 0]}
        width={[1]}
        mr={[15, 15, 22, 22, 32]}
      >
        <ResponsiveStack mt={[0, 0, 0, 0, -140]}>
          <PluginsSearchField
            placeholder='Search plugins...'
            height={50}
            width='100%'
            border='none'
            fontSize={14}
            fontFamily='SoleilBk'
            placeholderColor='#8c8c8c'
            px={[1, 1, 2]}
            onChange={this.handQueryFilter}
            className='plugins-search'
          />
        </ResponsiveStack>
      </Card>
    )
  }
}
