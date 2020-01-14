/**
  Constants used for caseStudies processing scripts
*/
const path = require('path')
const projectRoot = path.join(__dirname, '..', '..', '..')
const repoURL = 'https://github.com/ServerlessCN/serverlesscloud.cn'
const repoBranch = 'master'
/* uncomment out the line below to work locally with different caseStudies branch
repoBranch = 'your-custom-repo-branch-here'
/**/

module.exports = {
  repoURL,
  repoBranch,
  downloadLink: `${repoURL}/archive/${repoBranch}/.zip`,
  // caseStudiesRepoPath: path.join(projectRoot, 'content-external/serverless-caseStudies'),
  // caseStudiesRepoPostPath: path.join(projectRoot, 'content-external/serverless-caseStudies/posts/'),
  caseStudiesRepoPath: path.join(projectRoot, 'cn-serverless-casestudies'),
  caseStudiesRepoPostPath: path.join(projectRoot, 'cn-serverless-casestudies/content/best-practice'),
  siteCaseStudiesPath: path.join(projectRoot, 'content/cn/casestudies/'),
}
