import React from 'react'

import DefaultLayout from 'src/layouts/Default'
import { NewToServerlessPrefooter } from 'src/fragments'
import Hero from 'src/components/pages/examples/Hero'
import Content from 'src/components/pages/examples/Content'

const Examples = ({ location }) => {
    const edges = [
          {
            "node": {
              "id": "10-serverless-experts-you-should-follow-on-twitter",
              "frontmatter": {
                "title": "10 Serverless Experts You Should Follow on Twitter",
                "description": "The top Twitter accounts you should follow to stay on top of serverless, event-driven architecture, and other tech news."
              }
            }
          },
          {
            "node": {
              "id": "2017-04-5-build-webshop-with-graphql-and-serverless",
              "frontmatter": {
                "title": "Building a Web Store with GraphQL, Stripe, Mailgun and the Serverless Framework",
                "description": "Get familiar with GraphQL in this 30-minute tutorial on building an online store with Stripe, Mailgun and Serverless."
              }
            }
          }
   ]

  return (
    <DefaultLayout prefooter={NewToServerlessPrefooter} transparentHeader>
       <Hero />
       <Content examples={edges.map(({ node }) => node)} />
    </DefaultLayout>
  )
}

export default Examples
