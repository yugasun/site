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
      Can I deploy anything other than Serverless Framework services?
    </Heading.h5>
    <P>
      No. Serverless CI/CD only supports running tests and deploying Serverless
      Framework services. If you need to deploy other services, we recommend
      using a general CI/CD service like Travis or CircleCI and using the
      <code>serverless deploy</code> command. 
    </P>
    <br/><br/>
    <Heading.h5>
      What runtimes are supported?
    </Heading.h5>
    <P>
      Node and Python are the only two runtimes currently supported by
      Serverless CI/CD.
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
      Do I need to add a config file to my repository?
    </Heading.h5>
    <P>
      No. Serverless CI/CD inspects your existing serverless.yml to setup the
      CI/CD settings in the Dashboard. Branch deployments and preview
      deployments are configured in the Dashboard. Deployment credentials are
      setup using AWS Access Roles, and secrets to other services are managed
      using parameters. No other settings or configuration is required.
    </P>
    <br/><br/>
    <Heading.h5>
      Can I run custom scripts before/after deployment?
    </Heading.h5>
    <P>
      No. Scripts before and after deployment are not yet supported; however,
      this is coming soon.
    </P>
  </Flex>
)

export default FAQ
