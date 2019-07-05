import React from 'react'
import { Box, HyperLink } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { AutoScrollList } from 'src/fragments'
import comparisonCloudFormation from 'src/assets/images/comparisonCloudFormation.png'
import comparisonCustomTooling from 'src/assets/images/comparisonCustomTooling.svg'
import comparisonDocker from 'src/assets/images/comparisonDocker.svg'
import comparisonHeroku from 'src/assets/images/comparisonHeroku.svg'
import comparisonSAM from 'src/assets/images/comparisonSAM.png'
import comparisonTerraForm from 'src/assets/images/comparisonTerraForm.svg'
import comparisonZampa from 'src/assets/images/comparisonZampa.svg'

const renderContents = contents => (
  <React.Fragment>
    {contents.map((content, index) => (
      <P key={index} mt={[16, 16, 2, 3]}>
        {content}
      </P>
    ))}
  </React.Fragment>
)

const comparisonData = [
  {
    title: 'Docker',
    image: comparisonDocker,
    body: renderContents([
      'Docker packages software into standardized units (containers) to make it easier to manage application dependencies and avoid the "works on my machine" problem. Many people use containers so they can control their scaling. It is a serverfull architecture where you run a cluster of VM instances, with a likewise serverful cost model.',
      'Serverless compute services are essentially ephemeral containers, where the start/stop is managed automatically. The Serverless Applications deployed on them are fundamentally zero-administration and scale automatically with demand, which eliminates the need to manage server instances at all. Serverless Applications are also code-centric, and carry other serverless benefits such as pay-per-execution pricing models.',
    ]),
  },
  {
    title: 'CloudFormation',
    image: comparisonCloudFormation,
    body: renderContents([
      'CloudFormation is an AWS tool for deploying infrastructure. You describe your desired infrastructure in YAML or JSON, then submit your CloudFormation template for deployment. It enables "infrastructure as code".',
      'The Serverless Framework provides a configuration DSL which is designed for serverless applications. It also enables infrastructure as code while removing a lot of the boilerplate required for deploying serverless applications, including permissions, event subscriptions, logging, etc.',
      `When deploying to AWS, the Serverless Framework is using CloudFormation under the hood. This means you can use the Serverless Framework's easy syntax to describe most of your Serverless Application while still having the ability to supplement with standard CloudFormation if needed.`,
      'The Serverless Framework is provider-agnostic, so you can use it to deploy serverless applications to AWS, Microsoft Azure, Google Cloud Platform, or many other providers. This reduces lock-in and enables a multi-cloud strategy while giving you a consistent experience across clouds.',
      'Finally, the Serverless Framework assists with additional aspects of the serverless application lifecycle, including building your function package, invoking your functions for testing, and reviewing your application logs.',
    ]),
  },
  {
    title: 'SAM',
    image: comparisonSAM,
    body: renderContents([
      'The Serverless Application Model (SAM) is an extension to CloudFormation within AWS. It provides a way to use CloudFormation syntax to define your Serverless Applications with the addition of three new CloudFormation resources Function, API, Table, though it can only be used within the AWS ecosystem.',
      'SAM is a great tool for deploying a serverless architecture in AWS. However, Serverless Framework offers solutions for not only deploying but also testing, monitoring, alerting, and security.  Serverless Framework open source provides over two thousand plugins many of which we offer support for.  With the addition of Serverless Enterprise, you are able to monitor your deployments seamlessly, as well as gain valuble alerts on how your environment is performing.  Serverless Enterprise also gives you the ability to scan and enforce custom security policies before deployments.',
      'Both SAM and Serverless offer options for offline development.  SAM requires Docker for offline development, when you want to deploy a function it will create a local Docker container of the Lambda environment based on the code runtime.  Serverless offers a supported plugin for offline development that does not require Docker.',
      'While SAM reduces the boilerplate of defining your serverless application, the other limitations of CloudFormation still apply. The Serverless Framework has a provider-agnostic way to define serverless applications. It manages additional aspects of the serverless application lifecycle. Finally, it has a broader feature set and larger community of plugins, examples, and guides.',
    ]),
  },
  {
    title: 'Zappa, Claudia JS, etc',
    image: comparisonZampa,
    body: renderContents([
      <React.Fragment>
        There are a number of deployment tools for serverless applications,
        including{' '}
        <HyperLink
          href='https://www.zappa.io/'
          textDecoration='none'
          textDecoration='none'
          borderBottom='1px solid'
          borderColor='serverlessRed'
          hoverColor='#fd5750'
          target='_blank'
        >
          Zappa
        </HyperLink>{' '}
        for Python web applications or{' '}
        <HyperLink
          href='https://claudiajs.com/'
          textDecoration='none'
          textDecoration='none'
          borderBottom='1px solid'
          borderColor='serverlessRed'
          hoverColor='#fd5750'
          target='_blank'
        >
          ClaudiaJS
        </HyperLink>{' '}
        for Node web applications. These tools are purpose-built for their
        particular use cases. If they fit the use case you're looking for and
        you prefer their design, you should use them!
      </React.Fragment>,
      'The Serverless Framework is a more general purpose tool for deploying and managing serverless applications. You can deploy Python or Node web applications while also provisioning the infrastructure that your application needs, such as databases, queues, and object storage. Further, you can use the Framework to build multiple types of applications, including event streaming, image manipulation, and more.',
    ]),
  },
  {
    title: 'Terraform',
    image: comparisonTerraForm,
    body: renderContents([
      'Terraform is an unopinionated cloud deployment tool. It describes Infrastructure as Code and deploys to multiple clouds and SaaS systems at once. It is comparable to CloudFormation but for multiple clouds.',
      'The Serverless Platform has one strong opinion about how an application is defined, and then is flexible about everything else. It facilitates developing and deploying Serverless Applications, abstracting away the boilerplate required to deploy serverless applications. It also assists with the packaging and monitoring of your serverless applications.',
      'Terraform and the Serverless Platform are not mutually exclusive and can easily be used in tandem.',
    ]),
  },
  {
    title: 'Rolling your own tooling',
    image: comparisonCustomTooling,
    body: renderContents([
      `Rather than using the Serverless Framework, you may be tempted to create your own tooling for managing serverless applications. We get the feeling -- you get to build something! It's why our founder created the Framework in the first place.`,
      `Just be careful about what you're getting into. If your needs are small, you can get away with bash scripts or micro-frameworks. As you start using more and more pieces, you may find that maintaining your tooling is a full-time job in itself. Don't underestimate the benefit of a large community and ecosystem that is adding new features and fixing bugs.`,
    ]),
  },
  {
    title: 'Heroku',
    image: comparisonHeroku,
    body: renderContents([
      'Heroku is a service for managing stateless web application using the 12 Factor App approach that they pioneered. It has similarities to serverless applications in that much of work of managing and maintaining servers is done for you.',
      `However, serverless applications have a number of advantages over Heroku. With Heroku, you need to specify the number of "Dynos" (servers) available to handle your web application. With serverless application, this scaling is handled for you, automatically.`,
      `Further, you only pay for the resources you consume with Serverless architectures. With Heroku, you pay for your Dynos even when they're sitting idle.`,
      `Finally, Serverless architectures play more nicely as part of a larger, polyglot architecture. They are deployed directly to your existing cloud provider's account, so you can interact with other parts of your infrastructure.`,
    ]),
  },
]

const ComparisonsScrollList = () => (
  <Box width={1}>
    <AutoScrollList listData={comparisonData} />
  </Box>
)

export default ComparisonsScrollList
