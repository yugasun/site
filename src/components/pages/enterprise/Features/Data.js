import onPremiseIcon from 'src/assets/images/pages/enterprise/icon-security.svg'
import toolingIcon from 'src/assets/images/pages/enterprise/icon-tooling.svg'
import trainingIcon from 'src/assets/images/pages/enterprise/icon-training.svg'
import supportIcon from 'src/assets/images/pages/enterprise/icon-support.svg'

export default [
  {
    title: 'Standardized Tooling',
    description:
      'The Serverless Framework provides standardized workflows to develop, deploy, test, secure, and monitor Serverless architectures.',
    imageUrl: toolingIcon,
  },

  {
    title: 'On-premise',
    description:
      'Host the complete Serverless Framework solution on your own cloud account to maintain complete control over the data and infrastructure. ',
    imageUrl: onPremiseIcon,
  },
  {
    title: 'Enterprise Support',
    description:
      'Get world-class support from the team that built the Serverless Framework. We’ll ensure you can quickly overcome any obstacles you encounter along your path to Serverless adoption.',
    imageUrl: supportIcon,
  },
  {
    title: 'Training and guidance',
    description:
      'We provide training, workshops, and cloud arcitecture guidance for our enterprise customers to ensure you do Serverless right the first time.',
    imageUrl: trainingIcon,
  },
]
