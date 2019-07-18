import { dashboard, contactForm } from 'src/constants/newUrls'

export default {
  plans: ['free', 'unlimited', 'enterprise'],
  featureLabels: ['Transactions', 'Installation', 'Support', 'Team Seats'],
  featureValues: {
    free: ['$0/1m/month', 'SaaS', 'Community', '$0/user/month'],
    unlimited: ['$10/1m/month', 'SaaS', 'Best Effort', '$99/user/month'],
    enterprise: ['custom', 'SaaS/On-Prem', 'Enterprise SLA', 'custom'],
  },
  pricing: {
    free: 'Free',
    unlimited: '$99/month',
    enterprise: 'Enterprise',
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
      link: contactForm,
      linkType: 'internal',
    },
  },
}
