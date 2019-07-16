import { dashboard, enterprise } from 'src/constants/newUrls'

export default {
  plans: ['free', 'unlimited', 'enterprise'],
  featureLabels: ['Transactions', 'Installation', 'Support', 'Team Seats'],
  featureValues: {
    free: ['$0/1m/month', 'SaaS', 'Community', '$0/user/month'],
    unlimited: ['$10/1m/month', 'SaaS', 'Best Effort', '$99/user/month'],
    enterprise: [
      'volume discounts',
      'SaaS/On-Prem',
      'Enterprise SLA',
      'volume discounts',
    ],
  },
  pricing: {
    free: 'Free forever',
    unlimited: '$99/month',
    enterprise: 'enterprise',
  },
  cta: {
    free: {
      label: 'get started',
      link: dashboard,
      linkType: 'external',
    },
    unlimited: {
      label: 'get started',
      link: dashboard,
      linkType: 'external',
    },
    enterprise: {
      label: 'contact us',
      link: enterprise,
      linkType: 'internal',
    },
  },
}
