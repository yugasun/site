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
      'Docker将软件打包到标准化Docker中，以便于管理应用程序依赖性并避免环境冲突的问题。它是一个服务器完整的体系结构，您可以在其中运行VM实例集群，并且具有类似的服务器成本。',
      'Serverless计算本质上是临时容器。部署在上面的Serverless应用程序基本上是零管理的，并可以根据需求自动扩展。Serverless 应用程序也以代码为中心，并具拥有其他计算方式不具备的优势，例如按量计费的定价模型。',
    ]),
  },
  // {
  //   title: 'CloudFormation',
  //   image: comparisonCloudFormation,
  //   body: renderContents([
  //     'CloudFormation is an AWS tool for deploying infrastructure. You describe your desired infrastructure in YAML or JSON, then submit your CloudFormation template for deployment. It enables "infrastructure as code".',
  //     'The Serverless Framework provides a configuration DSL which is designed for serverless applications. It also enables infrastructure as code while removing a lot of the boilerplate required for deploying serverless applications, including permissions, event subscriptions, logging, etc.',
  //     `When deploying to AWS, the Serverless Framework is using CloudFormation under the hood. This means you can use the Serverless Framework's easy syntax to describe most of your Serverless Application while still having the ability to supplement with standard CloudFormation if needed.`,
  //     'The Serverless Framework is provider-agnostic, so you can use it to deploy serverless applications to AWS, Microsoft Azure, Google Cloud Platform, or many other providers. This reduces lock-in and enables a multi-cloud strategy while giving you a consistent experience across clouds.',
  //     'Finally, the Serverless Framework assists with additional aspects of the serverless application lifecycle, including building your function package, invoking your functions for testing, and reviewing your application logs.',
  //   ]),
  // },
  // {
  //   title: 'SAM',
  //   image: comparisonSAM,
  //   body: renderContents([
  //     'The Serverless Application Model (SAM) is an extension to CloudFormation within AWS. It provides a way to use CloudFormation syntax to define your Serverless Applications with the addition of three new CloudFormation resources Function, API, Table, though it can only be used within the AWS ecosystem.',
  //     'SAM is a great tool for deploying a serverless architecture in AWS. However, Serverless Framework offers solutions for not only deploying but also testing, monitoring, alerting, and security.  Serverless Framework open source provides over two thousand plugins many of which we offer support for.  With the addition of Serverless Enterprise, you are able to monitor your deployments seamlessly, as well as gain valuble alerts on how your environment is performing.  Serverless Enterprise also gives you the ability to scan and enforce custom security policies before deployments.',
  //     'Both SAM and Serverless offer options for offline development.  SAM requires Docker for offline development, when you want to deploy a function it will create a local Docker container of the Lambda environment based on the code runtime.  Serverless offers a supported plugin for offline development that does not require Docker.',
  //     'While SAM reduces the boilerplate of defining your serverless application, the other limitations of CloudFormation still apply. The Serverless Framework has a provider-agnostic way to define serverless applications. It manages additional aspects of the serverless application lifecycle. Finally, it has a broader feature set and larger community of plugins, examples, and guides.',
  //   ]),
  // },
  {
    title: 'Zappa, Claudia JS',
    image: comparisonZampa,
    body: renderContents([
      <React.Fragment key='zappa-claudia'>
        There are a number of deployment tools for serverless applications,
        有许多用于 Serverless 的应用程序的部署工具，包括用于 Python Web
        应用程序的 including{' '}
        <HyperLink
          href='https://www.zappa.io/'
          textDecoration='none'
          borderBottom='1px solid'
          borderColor='serverlessRed'
          hoverColor='#fd5750'
          target='_blank'
        >
          Zappa
        </HyperLink>{' '}
        或用于Node Web应用程序的{' '}
        <HyperLink
          href='https://claudiajs.com/'
          textDecoration='none'
          borderBottom='1px solid'
          borderColor='serverlessRed'
          hoverColor='#fd5750'
          target='_blank'
        >
          ClaudiaJS
        </HyperLink>{' '}
        这些工具是针对其特定用例而专门设计的。
      </React.Fragment>,
      'Serverless 框架是用于部署和管理无服务器应用程序的更通用的工具。您可以部署 Python 或 Node Web 应用程序，同时还可以配置应用程序所需的基础结构，例如数据库，队列和对象存储。此外，也可以使用框架来构建多种类型的应用程序，包括事件流，图像处理等。',
    ]),
  },
  {
    title: 'Terraform',
    image: comparisonTerraForm,
    body: renderContents([
      'Terraform 是一种不受限制云供应商的服务部署工具。它将基础架构抽象为代码，并立即部署到多个云和 SaaS 系统。',
      'Serverless 平台对如何定义应用程序有很强的诉求，它有助于开发和部署Serverless应用程序，从而抽象出部署 Serverless 应用程序所需的模板。可以帮助开发者打包和监控Serverless应用程序。',
      'Terraform 和 Serverless 不是互斥的，可以轻松使用。',
    ]),
  },
  {
    title: '开发自己的工具',
    image: comparisonCustomTooling,
    body: renderContents([
      `您可能会很想创建自己的工具来管理 Serverless 应用程序，而不是使用 Serverless 框架。我们有这样的感觉，您可以自由的构建一些属于自己的工具！`,
      `如果您的需求很小，则可以使用 bash 脚本或使用较小的框架。随着您使用越来越多的功能，您可能会发现维护工具本身就是一项工作。不要低估了大型社区和生态系统所带来的好处，即新功能的迭代和修复了错误。`,
    ]),
  },
  {
    title: 'Heroku',
    image: comparisonHeroku,
    body: renderContents([
      'Heroku 与 Serverless 应用程序的相似之处在于，管理和维护服务器的许多工作都是为您完成的。',
      `但是，Serverless 应用程序比 Heroku 具有许多优势。使用 Heroku，您需要指定可用于处理Web应用程序的“ Dynos”（服务器）数量。使用 Serverless 应用程序时，将自动为您处理这种扩缩容策略。`,
      `此外，您只需为使用 Serverless 架构所消耗的资源付费。使用 Heroku，即使 Dynos 处于闲置状态，您也需要为其支付费用。`,
      `最后，Serverless 架构作为多语言框架的一部分，可以更好地发挥其应用场景。它们将直接部署到现有的云端帐户中。`,
    ]),
  },
]

const ComparisonsScrollList = () => (
  <Box width={1}>
    <AutoScrollList listData={comparisonData} />
  </Box>
)

export default ComparisonsScrollList
