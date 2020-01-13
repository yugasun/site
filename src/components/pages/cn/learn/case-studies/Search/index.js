import React from 'react'
import { Box, Background, Row } from 'serverless-design-system'

import { AppContainer } from 'src/components'
import SearchField from './Field'
import SearchFilters from './Filters'

export default class ExamplesSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: {},
      showFilters: true,
    }

    this.sendResultsToProps = this.sendResultsToProps.bind(this)
    this.toggleFilter = this.toggleFilter.bind(this)
  }

  sendResultsToProps(newFilter) {
    const newFilterState = Object.assign(this.state.filter, newFilter)
    const newFilterStateClean = this.removeFalsy(newFilterState)
    this.setState({ filter: newFilterStateClean })
    this.props.refreshResults(newFilterStateClean)
  }

  removeFalsy(obj) {
    let newObj = {}
    Object.keys(obj).forEach(prop => {
      if (obj[prop] && obj[prop].length) {
        newObj[prop] = obj[prop]
      }
    })
    return newObj
  }

  toggleFilter() {
    const showFiltersBool = this.state.showFilters
    this.setState({ showFilters: !showFiltersBool })
  }

  render() {
    return (
      <Background background='#f7f7f7'>
        <AppContainer>
          <Box
            color='black'
            mb='62px'
            pb={['22px', '22px', '42px']}
            pt={['12px', '12px', 22]}
          >
            <Row>
              <SearchField refreshSearch={this.sendResultsToProps} />
            </Row>

            <Box
              display={
                this.state.showFilters ? ['none', 'none', 'block'] : 'none'
              }
            >
              <SearchFilters refreshFilters={this.sendResultsToProps} />
            </Box>
          </Box>
        </AppContainer>
      </Background>
    )
  }
}
