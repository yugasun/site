import React from 'react'
import { Box, ResponsiveStack } from 'serverless-design-system'

import { AutoScrollList } from 'src/fragments'
import TechBox from './TechBox'
import { P, Heading } from 'src/fragments/DesignSystem'
import LearnUsecase01 from 'src/assets/images/learnUsecase01.svg'
import LearnUsecase02 from 'src/assets/images/learnUsecase02.svg'
import LearnUsecase03 from 'src/assets/images/learnUsecase03.png'
import LearnUsecase04 from 'src/assets/images/learnUsecase04.png'
import LearnUsecase05 from 'src/assets/images/learnUsecase05.png'
import LearnUsecase06 from 'src/assets/images/learnUsecase06.png'
import LearnUsecase07 from 'src/assets/images/learnUsecase07.png'
import nodeJSImage from 'src/assets/images/nodejs.png'
import expressImage from 'src/assets/images/express.png'
import pythonImage from 'src/assets/images/python.png'
import flaskImage from 'src/assets/images/flask.png'
import graphqlImage from 'src/assets/images/graphql.png'

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
    title: '自动扩缩容的网站和API',
    image: LearnUsecase01,
    body: (
      <React.Fragment>
        {renderContents([
          'Serverless 网站和应用程序无需安装基础环境即可进行编写和部署。因此，在几天之内即可完成启动功能齐全的网站。Serverless后端会根据需求自动扩展。当您的流量突然激增时，无需担心服务崩溃。',
        ])}
        {/*
          <Box mt={[2]} mb={[5]}>
          <Heading.h5 mb={[4]}>
            Want to get started? Check out these walkthroughs:
          </Heading.h5>
          <ResponsiveStack alignItems={['center', 'center', 'left']}>
            <TechBox
              upperImage={nodeJSImage}
              lowerImage={expressImage}
              to='/blog/serverless-express-rest-api/'
            />
            <TechBox
              upperImage={pythonImage}
              lowerImage={flaskImage}
              to='/blog/flask-python-rest-api-serverless-lambda-dynamodb/'
            />
            <TechBox
              upperImage={graphqlImage}
              to='/blog/make-serverless-graphql-api-using-lambda-dynamodb/'
            />
          </ResponsiveStack>
        </Box>
         */}
      </React.Fragment>
    ),
  },
  {
    title: '事件流',
    image: LearnUsecase02,
    body: renderContents([
      '可以 pub/sub topics或事件日志触发Serverless函数计算，从而为您提供灵活，可扩展的事件，而无需维护复杂的集群。这些事件流可以为您提供更加完善的分析策略，包括数据存储和缓存监视系统。',
    ]),
  },
  {
    title: '图像和视频处理',
    image: LearnUsecase03,
    body: renderContents([
      'Serverless 可以架构应用程序的图像和视频服务。您可以使用Serverless服务来执行诸如动态调整图像大小或更改不同目标设备的视频转码之类的操作。',
      '应用程序也越来越依赖图像识别之类的东西来改善用户体验：例如，购物网站中的付款场景，客户可以拍摄银行卡正面，而无需手动输入数字。',
      '借助Serverless，您可以使用腾讯云银行卡识别的OCR API或慧眼的活体检测。可以自动处理和重新格式化用户上传的图像，或者将它们调整为特定的缩略图尺寸。',
    ]),
  },
  {
    title: '事件处理和SaaS平台',
    image: LearnUsecase04,
    body: renderContents([
      `现在的应用程序具有令人难以置信的模块化，因为它们大量利用了第三方SaaS提供商（GitHub，Twilio，Auth0，Stripe）的软件来交付功能。`,
      'Serverless允许为这些事件做订阅，而不管这些功能在何处托管。使用Webhook检测功能来自动化GitHub工作流。',
    ]),
  },
  // {
  //   title: '混合云应用',
  //   image: LearnUsecase05,
  //   body: renderContents([
  //     '各个云供应商商通常无法独自满足所有业务需求。团队选择利用每个供应商提供的最强大的功能，要求他们将服务部署到单个应用程序中的多个提供商。但是云提供商本身并不容易做到这一点。',
  //     '我们的工具可以抽象化获得功能以适应云供应商独特格式所需的所有必要调整。这使您可以轻松地部署到所选的任何云提供商，从而最大程度地提高应用程序的效率，并充分利用每个云供应商必须提供的最佳服务。',
  //   ]),
  // },
  {
    title: '多语言应用',
    image: LearnUsecase06,
    body: renderContents([
      '在构建应用程序时，通常会首先讨论使用哪种语言。选择的语言并不总是与最适合项目的语言有关，而是与现有资源有关。',
      '使用Serverless，应用程序可以是多语言的。服务可以无缝集成到应用程序中。它进一步防止了团队被无限期地锁定使用相同的语言；新语言可以用于新服务，并且仍然可以根据需要与旧服务进行数据回调。',
    ]),
  },
  {
    title: '持续集成和持续部署（CI / CD）',
    image: LearnUsecase07,
    body: renderContents([
      '快速迭代软件的能力比以往任何时候都更为重要。CI / CD允许您以较小的增量Push代码，可以每天上传错误修复和其他更新。',
      'Serverless可以使许多这些过程自动化。代码上传完成后可以自动触发网站构建和重新部署，或者PR可以触发运行自动测试以确保代码在经过人工检查之前已经过程序测试。',
    ]),
  },
]

export default () => (
  <Box width={1}>
    <AutoScrollList listData={comparisonData} />
  </Box>
)
