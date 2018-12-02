import React from 'react'
import { Box, Background, Row } from 'serverless-design-system'

import { AppContainerNewest as AppContainer }  from 'src/components'
import SearchField from './Field'
import SearchHeading from './Heading'
import SearchFilters from './Filters'
import { Button } from 'src/fragments/DesignSystem'

export default class ExamplesSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: {},
            showFilters: true
        }

        this.sendResultsToProps = this.sendResultsToProps.bind(this)
        this.toggleFilter = this.toggleFilter.bind(this)
    }

    sendResultsToProps(newFilter) {
        const newFilterState = Object.assign(this.state.filter, newFilter)
        const newFilterStateClean = this.removeFalsy(newFilterState)
        this.setState({filter: newFilterStateClean})
        this.props.refreshResults(newFilterStateClean)
    }

    removeFalsy(obj) {
        let newObj = {}
        Object.keys(obj).forEach((prop) => {
            if (obj[prop] && obj[prop].length) { newObj[prop] = obj[prop] }
        })
        return newObj
    }

    toggleFilter() {
        const showFiltersBool = this.state.showFilters
        this.setState({showFilters : !showFiltersBool})
    }

    render() {
        return (
            <Background background='#f7f7f7'>
                <AppContainer>
                    <Box
                        color='black'
                        mb='62px'
                        pb='42px'
                    >
                        <SearchHeading />
                        <Row>
                            <SearchField refreshSearch={this.sendResultsToProps}/>
                            <Box display={['none', 'none', 'block']}>
                                <Button onClick={this.toggleFilter} width={[0, 0, '196px', '196px', '196px', '176px']} mt={[22, 22, 5]} style={ {backgroundColor: this.state.showFilters ? '#b73833': '#fd5750'} }>
                                    { this.state.showFilters ? 'hide filters': 'filters'}
                                </Button>
                            </Box>
                        </Row>
                        
                        <Box display={ this.state.showFilters ? ['none', 'none', 'block']: 'none'}>
                            <SearchFilters refreshFilters={this.sendResultsToProps}/>
                        </Box>
                    </Box>
                </AppContainer>
            </Background>
        )
    }
    
}
                   