import React from 'react'
import { Box, Flex, Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import PluginPreview from './SinglePluginPreview'
import algoliasearch from 'algoliasearch/lite'
import SearchOptions from './Search/index'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
const pluginsIndex = client.initIndex(process.env.GATSBY_ALGOLIA_PLUGINS_INDEX)

const paginationLimit = 15

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      plugins: this.props.plugins,
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
          this.addResults({
            filters:
              "NOT highlighted:'true' AND NOT status:'deprecated' AND NOT status:'unchecked'",
          })
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

  parsePluginsFromAlgolia = content => {
    const plugins = content.hits.map(hit => {
      return {
        id: hit.objectID,
        frontmatter: {
          title: hit.title,
          description: hit.description,
          gitLink: hit.gitLink,
          npmDownloads: hit.npmDownloads,
          githubStars: hit.githubStars,
          status: hit.status,
        },
      }
    })

    return plugins
  }

  refreshResults = searchObj => {
    pluginsIndex.search(searchObj, (err, content) => {
      if (err) console.error(err)
      const plugins = this.parsePluginsFromAlgolia(content)
      this.setState({
        plugins,
      })
    })
  }

  makeFilterQuery = filter => {
    const searchQuery = filter.search

    let filtersQuery = "NOT status:'deprecated' AND NOT status:'unchecked'"
    Object.keys(filter).map(key => {
      //skipping 'search' key since algolia has query parameter specifically for search text, deleting it before forming filterQuery
      if (filter[key] && key !== 'search') {
        if (filtersQuery) {
          filtersQuery += ' AND '
        }

        filter[key].forEach((value, index) => {
          if (index === 0) {
            filtersQuery += `${key}:'${value.toLowerCase()}'`
          } else {
            filtersQuery += ` OR ${key}:'${value.toLowerCase()}'`
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
    pluginsIndex.search(searchObj, (err, content) => {
      if (err) console.error(err)
      const nextPageNum = currentPageNum + 1
      this.setState({ pageNum: nextPageNum, isLoading: false })

      const plugins = this.parsePluginsFromAlgolia(content)
      if (plugins.length < paginationLimit) {
        this.setState({ noMoreResults: true })
      }

      const allPlugins = this.state.plugins.concat(plugins)
      this.setState({ plugins: allPlugins })
    })
  }

  render() {
    return (
      <Box>
        <SearchOptions refreshResults={this.handleRefreshResults} />
        <Box style={{ backgroundColor: '#f7f7f7' }}>
          <AppContainer>
            <Box pb={[72, 72, 72, 72, 112]}>
              <Flex
                flexDirection={['column', 'column', 'row']}
                flexWrap='wrap'
                justifyContent='left'
              >
                {this.state.plugins.map((plugin, index) => (
                  <PluginPreview key={`plugin-${index}`} {...plugin} />
                ))}
              </Flex>
            </Box>
          </AppContainer>
        </Box>
      </Box>
    )
  }
}
