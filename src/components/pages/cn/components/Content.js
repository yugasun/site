import React from 'react'
import { Box, Flex, Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import ComponentPreview from './SingleComponentPreview'
import algoliasearch from 'algoliasearch/lite'
import SearchOptions from './Search/index'

const client = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)
const cnComponentsIndex = client.initIndex(
  process.env.GATSBY_ALGOLIA_CN_COMPONENTS_INDEX
)

const paginationLimit = 12

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    const { components } = this.props
    this.state = {
      components:  components,
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

  parseComponentsFromAlgolia = (content = {hits: []}) => {
    const components = content.hits.map(hit => {
      return {
        id: hit.objectID,
        frontmatter: {
          avatar: hit.avatar,
          title: hit.title,
          description: hit.description,
          gitLink: hit.gitLink,
          npmDownloads: hit.npmDownloads,
          githubStars: hit.githubStars,
          status: hit.status,
        },
      }
    })
    // .sort(
    //   (a, b) => {
    //     return b.frontmatter.npmDownloads - a.frontmatter.npmDownloads
    //   }
    // )

    return components
  }

  refreshResults = searchObj => {
    cnComponentsIndex.search(searchObj, (err, content) => {
      if (err) console.error(err)
      const components = this.parseComponentsFromAlgolia(content)
      this.setState({
        components,
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

    cnComponentsIndex.search(searchObj, (err, content) => {
      if (err) console.error(err)
      const nextPageNum = currentPageNum + 1
      this.setState({ pageNum: nextPageNum, isLoading: false })

      const components = this.parseComponentsFromAlgolia(content)

      if (components.length < paginationLimit) {
        this.setState({ noMoreResults: true })
      }

      const allCnComponents = this.state.components.concat(components)
      allCnComponents.sort((a, b) => b.npmDownloads - a.npmDownloads)
      // filter same components
      const newList = []
      const existIds = []
      allCnComponents.forEach((item) => {
        if (existIds.indexOf(item.id) === -1) {
          newList.push(item)
          existIds.push(item.id)
        }
      })
      this.setState({ components: newList })
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
                justifyContent='flex-start'
              >
                {this.state.components.map((component, index) => (
                  <ComponentPreview
                    key={`component-${component.id}`}
                    {...component}
                  />
                ))}
              </Flex>
            </Box>
          </AppContainer>
        </Box>
      </Box>
    )
  }
}
