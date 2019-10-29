import React from 'react'
import { Flex } from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'
import { plugins, cli, components } from 'src/constants/urls'

const FAQ = props => (
  <Flex
    flexDirection='column'
    mx='auto'
    width={[1, 1, 0.8, 0.8, '80%']}
    pb={[92, 92, 92, 92, 132]}
  >
    <Heading.h3 align={['left', 'left', 'center']}>
      Frequently Asked Questions
    </Heading.h3>

    <Heading.h5>
      Is there a free tier?
    </Heading.h5>
    <P>
      Yes, up to 1 concurrent build with the Free tier. No credit card required, just sign up.
    </P>
    <br/><br/>
    <Heading.h5>
      How much does it cost if I need more?
    </Heading.h5>
    <P>
      You get one free concurrent deployment with the Free tier. The Team tier
      includes 2 concurrent builds and you can buy more for $25/mo/concurrent
      build. 
    </P>
    <br/><br/>
    <Heading.h5>
      Is it just for Serverless Framework?
    </Heading.h5>
    <P>
      Yes! Serverless CI/CD is designed around the Serverless Framework to
      provide a seamless experience for developers. Anything you can deploy with
      the Serverless Framework you can deploy with Serverless CI/CD. The
      Serverless Framework is extensible with {' '}
      <InternalLink
        to={'/plugins/'}
        underline
      >
        Plugins
      </InternalLink>{' '}, so it works with a broad range of services.
    </P>
    <br/><br/>
    <Heading.h5>
      Is Serverless CI/CD also available for Enterprise?
    </Heading.h5>
    <P>
      Yes, Serverless CI/CD works with the Enterprise tier and it is available
      for self-hosting.
    </P>
    <br/><br/>
    <Heading.h5>
      Are all runtimes supported?
    </Heading.h5>
    <P>
      Only the most popular runtimes, Node and Python, are currently
      supported. These two runtimes account for about 90% of all serverless
      services. Support for other runtimes is coming soon.
    </P>
    <br/><br/>
    <Heading.h5>
      Does Serverless CI/CD support AWS, Azure and GCP?
    </Heading.h5>
    <P>
      Only AWS is supported at this time; however, support for other cloud
      service providers is coming.
    </P>
    <br/><br/>
    <Heading.h5>
      Do I need to host, manage, or operate any agents?
    </Heading.h5>
    <P>
      Nope! Serverless CI/CD is a 100% SaaS and managed for you. If you
      prefer to self-host, that is available as an option with the Enterprise
      tier.
    </P>

  </Flex>
)

export default FAQ
