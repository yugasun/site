/**
  Constants used for plugins processing scripts
*/
const path = require('path')
const projectRoot = path.join(__dirname, '..', '..')
const pluginsList =
  'https://serverless-plugins-data.s3.amazonaws.com/plugins-with-stats.json'

const featuredPlugins = [
  'serverless-build-plugin',
  'serverless-resources-env',
  'serverless-event-constant-inputs',
  'serverless-kms-secrets',
  'serverless-plugin-stack-outputs',
  'serverless-plugin-stage-variables',
  'serverless-plugin-cloudwatch-sumologic',
  'serverless-plugin-aws-alerts',
  'serverless-plugin-package-dotenv-file',
  'serverless-command-line-event-args',
  'serverless-dynamodb-local',
  'serverless-dynamodb-fixtures',
  'serverless-offline',
  'serverless-offline-ssm',
]

module.exports = {
  pluginsList,
  featuredPlugins,
  pluginsRepoPath: path.join(projectRoot, 'serverless-plugins'),
  pluginsTmpPath: path.join(projectRoot, 'content/plugins'),
  sitePluginPath: path.join(projectRoot, 'content/plugins/'),
}
