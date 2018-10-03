import React from 'react'
import axios from 'axios'
import { withTheme } from 'styled-components'
import { Box, Flex, Text, Heading, Row} from 'serverless-design-system'

import { AppContainer } from 'src/components'
import Search from './Search'
import ExamplePreview from './SingleExamplePreview'

//TODO - do this via static
const examplesApi = "https://api.myjson.com/bins/11dcl4"

export default class Content extends React.Component {

  constructor (props){
      super(props)
      this.state = {
        examples: this.props.examples,
        filter: {}
      }
  }

  onClick() {
    console.log("clicked brr")
  }

  handleRefreshResults = (filter) => {
    axios({
      method: 'get',
      url: examplesApi
    }).then((response) => {
      this.setState({
        examples: response.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  changeResults = () => {
      this.setState({examples: [{
          "id": "10-serverless-experts-you-should-follow-on-twitter",
          "frontmatter": {
            "title": "10 Serverless Experts You Should Follow on Twitter",
            "description": "The top Twitter accounts you should follow to stay on top of serverless, event-driven architecture, and other tech news."
          }
      },
      {
          "id": "2017-04-5-build-webshop-with-graphql-and-serverless",
          "frontmatter": {
            "title": "Building a Web Store with GraphQL, Stripe, Mailgun and the Serverless Framework",
            "description": "Get familiar with GraphQL in this 30-minute tutorial on building an online store with Stripe, Mailgun and Serverless."
          }
      }]})
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
                onClick={this.changeResults.bind(this)}
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

        <Search refreshResults={this.handleRefreshResults}/>

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
