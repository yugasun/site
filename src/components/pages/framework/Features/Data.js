import developIcon from 'src/assets/images/pages/framework/icon-develop.svg'
import deployIcon from 'src/assets/images/pages/framework/icon-deploy.svg'
import testIcon from 'src/assets/images/pages/framework/icon-test.svg'
import secureIcon from 'src/assets/images/pages/framework/icon-secure.svg'
import monitorIcon from 'src/assets/images/pages/framework/icon-monitor.svg'

export default [
  {
    id: 1,
    image: developIcon,
    heading: 'Develop',
    features: ['Secrets', 'Output variables', 'Plugins'],
  },

  {
    id: 2,
    image: deployIcon,
    heading: 'Deploy',
    features: ['Provisioning', 'Rollbacks', 'Profiles'],
  },

  {
    id: 3,
    image: testIcon,
    heading: 'Test',
    features: ['Local emulation', 'Log streaming', 'Test command'],
  },

  {
    id: 4,
    image: secureIcon,
    heading: 'Secure',
    features: ['Access roles', 'Audit reports', 'Policies'],
  },

  {
    id: 5,
    image: monitorIcon,
    heading: 'Monitor',
    features: ['Metrics', 'Alerts', 'Notifications'],
  },
]
