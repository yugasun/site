import developIcon from 'src/assets/images/pages/framework/icon-develop.svg'
import deployIcon from 'src/assets/images/pages/framework/icon-deploy.svg'
import testIcon from 'src/assets/images/pages/framework/icon-test.svg'
import secureIcon from 'src/assets/images/pages/framework/icon-secure.svg'
import monitorIcon from 'src/assets/images/pages/framework/icon-monitor.svg'

export default [
  {
    id: 1,
    image: developIcon,
    title: 'Develop',
    author: 'Austen Collins',
  },

  {
    id: 2,
    image: deployIcon,
    title: 'Deploy',
    features: 'Austen Collins',
  },

  {
    id: 3,
    image: testIcon,
    title: 'Test',
    author: ['Local emulation', 'Log streaming', 'Test command'],
  },

  {
    id: 4,
    image: secureIcon,
    title: 'Secure',
    author: ['Access roles', 'Audit reports', 'Policies'],
  },

  {
    id: 5,
    image: monitorIcon,
    title: 'Monitor',
    author: ['Metrics', 'Alerts', 'Notifications'],
  },
]
