import React from 'react'
import axios from 'axios'
import { withTheme } from 'styled-components'
import { Box, Flex, Text, Heading, Row} from 'serverless-design-system'

import { AppContainer } from 'src/components'
import Search from './Search'
import ExamplePreview from './SingleExamplePreview'
import algoliasearch from 'algoliasearch'

const client = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY) 
const examplesIndex = client.initIndex(process.env.GATSBY_ALGOLIA_EXAMPLES_INDEX)

//TODO - dynamic generation of examplesList pages
const selectedProps = {
  //platform: 'AWS',
  //language: 'nodeJS'
} 

export default class Content extends React.Component {

  constructor (props){
      super(props)
      this.state = {
        examples: this.props.examples,
        filter: {}
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll = () => {
    if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1500)) {
      console.log("load more")
    }
  }

  handleRefreshResults = (filter) => {
    console.log(filter)
   
    const thisTitle = filter.title

    delete filter.framework
    delete filter.title

    let filtersQuery = ""
    
    Object.keys(filter).map((key) => {
        if(filter[key]) {
          if(filtersQuery) {
            filtersQuery += ' AND '
          }

          filtersQuery += `${key}:"${filter[key]}"`
        }
    })
    console.log(filtersQuery, examplesIndex)

    examplesIndex.search({query: thisTitle, filters: filtersQuery }, (err, content) => {
      if(err) {
        console.log(err)
      } else {
        console.log("hits are", content.hits)

        const examples = content.hits.map((hit) => {
          return {
            id: hit.objectID,
            frontmatter: {
              title: hit.title,
              description: hit.description,
              language: hit.language,
              platform: hit.platform
            }
          }
        })

        this.setState({
          examples
        })
      }
      

    })
  }

  render() {
    return (
      <AppContainer>
      
      <Box
        pb={[300, 300, 12, 12]}
      >
      
        <Box
          mt={[6]}
          mb={[4, 4, 2]}
          color='black'
        >
          <Heading.h3
                fontSize={[4, 4, 4, 6]}
                fontFamily='SoleilBk'
                letterSpacing='h4'
                align='center'
              >
            All the examples
          </Heading.h3>
        </Box>

        <Flex.horizontallyCenter>
          <Box
            mb={[2, 2, 4, 5]}
            width={[1/2]}
          >
            <Text.p
              color='#5b5b5b'
              fontSize={[1, 1, 2]}
              fontFamily='Soleil'
              lineHeight={1}
              letterSpacing={'-0.2'}
              m={0}
              align='center'
            >
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text.p>
          </Box>
        </Flex.horizontallyCenter>

        <Search refreshResults={this.handleRefreshResults} selectedOptions={selectedProps}/>

        <Flex
          flexDirection={['column', 'column', 'row']}
          flexWrap='wrap'
        >
          
            { this.state.examples.map((example, index) => (<ExamplePreview key={`example-${index}`} {...example} />)) }
        </Flex>
      </Box>
    </AppContainer>
    )
  }
}
