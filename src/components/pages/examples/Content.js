import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import ExamplePreview from './SingleExamplePreview'
import algoliasearch from 'algoliasearch/lite'
import SearchOptions from './Search/index'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
const examplesIndex = client.initIndex(
  process.env.GATSBY_ALGOLIA_EXAMPLES_INDEX
)

const paginationLimit = 15

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      examples: this.props.examples,
      initState: true,
      noMoreResults: false,
      isLoading: false,
      filter: {},
      pageNum: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 1500
    ) {
      if (this.state.isLoading || this.state.noMoreResults) {
        return
      } else {
        this.setState({ isLoading: true })

        if (this.state.initState) {
          this.addResults({ filters: 'NOT highlighted:true' })
        } else {
          const currentFilters = this.makeFilterQuery(this.state.filter)
          this.addResults(currentFilters)
        }
      }
    }
  }

  //triggered when user searches for something new or filters something
  handleRefreshResults = filter => {
    this.setState({
      filter: filter,
      initState: false,
      noMoreResults: false,
      isLoading: false,
      pageNum: 0,
    })
    const searchObj = this.makeFilterQuery(filter)
    searchObj.hitsPerPage = paginationLimit
    searchObj.page = 0
    this.setState({ pageNum: 1 })
    this.refreshResults(searchObj)
  }

  parseExamplesFromAlgolia = content => {
    const examples = content.hits.map(hit => {
      return {
        id: hit.objectID,
        frontmatter: {
          title: hit.title,
          description: hit.description,
          language: hit.language,
          platform: hit.platform,
          gitLink: hit.gitLink,
        },
      }
    })

    return examples
  }

  refreshResults = searchObj => {
    examplesIndex.search(searchObj, (err, content) => {
      if (err) console.error(err)
      const examples = this.parseExamplesFromAlgolia(content)
      this.setState({
        examples,
      })
    })
  }

  makeFilterQuery = filter => {
    const searchQuery = filter.search

    let filtersQuery = ''
    Object.keys(filter).map(key => {
      //skipping 'search' key since algolia has query parameter specifically for search text, deleting it before forming filterQuery
      if (filter[key] && key !== 'search') {
        if (filtersQuery) {
          filtersQuery += ' AND '
        }

        filter[key].forEach((value, index) => {
          if (index === 0) {
            filtersQuery += `${key}:"${value}"`
          } else {
            filtersQuery += ` OR ${key}:"${value}"`
          }
        })
      }
    })

    let searchObj = {}
    if (searchQuery) {
      searchObj.query = searchQuery
    }

    if (filtersQuery) {
      searchObj.filters = filtersQuery
    }

    return searchObj
  }

  //used for pagination
  addResults = searchObj => {
    const currentPageNum = this.state.pageNum

    searchObj.hitsPerPage = paginationLimit
    searchObj.page = currentPageNum
    examplesIndex.search(searchObj, (err, content) => {
      if (err) console.error(err)
      const nextPageNum = currentPageNum + 1
      this.setState({ pageNum: nextPageNum, isLoading: false })

      const examples = this.parseExamplesFromAlgolia(content)
      if (examples.length < paginationLimit) {
        this.setState({ noMoreResults: true })
      }

      const allExamples = this.state.examples.concat(examples)
      this.setState({ examples: allExamples })
    })
  }

  render() {
    return (
      <Box>
        <SearchOptions refreshResults={this.handleRefreshResults} />
        <AppContainer>
          <Box>
            <Flex
              flexDirection={['column', 'column', 'row']}
              flexWrap='wrap'
              justifyContent='left'
              mb={[20, 20, 0, 0, 80]}
            >
              {this.state.examples.map((example, index) => (
                <ExamplePreview key={`example-${index}`} {...example} />
              ))}
            </Flex>
          </Box>
        </AppContainer>
      </Box>
    )
  }
}
