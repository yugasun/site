import certifiedBadge from 'src/assets/images/pages/plugins/certified.svg'
import communityBadge from 'src/assets/images/pages/plugins/community.svg'
import approvedBadge from 'src/assets/images/pages/plugins/approved.svg'
import approvedMobileBadge from 'src/assets/images/pages/plugins/approved-mobile.svg'

module.exports = {
  statusBadges: {
    certified: certifiedBadge,
    community: communityBadge,
    approved: approvedBadge,
  },
  statusTooltips: {
    certified: 'Enterprise customers receive support for these plugins',
    approved: 'Has been reviewed and verified by Serverless team',
    community: 'Has not yet been reviewed by Serverless team',
  },
  statusBadgesMobile: {
    approved: approvedMobileBadge,
  },
}
