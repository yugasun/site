/**
  Constants used for components processing scripts
*/
const path = require('path')
const projectRoot = path.join(__dirname, '..', '..', '..')
const componentsList =
  'https://serverless-components-info-1300862921.cos.ap-guangzhou.myqcloud.com/components-with-stats.json'

const featuredComponents = [
  '@serverless/tencent-apigateway',
  '@serverless/tencent-scf',
  '@serverless/tencent-cos',
  '@serverless/tencent-cdn',
  '@serverless/tencent-cam-role',
  '@serverless/tencent-cam-policy',
]

module.exports = {
  componentsList,
  featuredComponents,
  componentsRepoPath: path.join(projectRoot, 'cn-serverless-components'),
  componentsTmpPath: path.join(projectRoot, 'content/cn/components'),
  siteComponentPath: path.join(projectRoot, 'content/cn/components/'),
}
