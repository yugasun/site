import React from 'react'
import { client as algoliaClient, indexName } from '../../utils/algolia'
import AlgoliaInput from 'algolia-react-input'
import SearchResult from '../../fragments/SearchResult'
import Page from '../../layouts/Page'
import styles from './Search.css'

export default class SearchPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hits: undefined,
    }
  }
  onError = () => {
    console.log('onError', arguments)
  }
  onResults = (content) => {
    this.setState({ hits: content.hits })
  }
  onEmptyField = () => {
    this.setState({ hits: undefined })
  }
  render () {
    const SearchInput = (
      <AlgoliaInput
        placeholder='Tìm kiếm...'
        className={styles.searchInput}
        client={algoliaClient}
        index={indexName}
        onResults={this.onResults}
        onEmptyField={this.onEmptyField}
        onError={this.onError}
      />
    )
    let show
    if (this.state.hits) {
      show = (
        <SearchResult hits={this.state.hits} />
      )
      console.log(this.state.hits)
    }

    return (
      <Page {...this.props}>
        {SearchInput}
        <hr />
        {show}
      </Page>
    )
  }
}
