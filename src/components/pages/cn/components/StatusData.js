import certifiedBadge from 'src/assets/images/pages/cn/components/certified.svg'
import communityBadge from 'src/assets/images/pages/cn/components/community.svg'
import approvedBadge from 'src/assets/images/pages/cn/components/approved.svg'
import approvedMobileBadge from 'src/assets/images/pages/cn/components/approved-mobile.svg'

module.exports = {
  statusBadges: {
    official: certifiedBadge,
    community: communityBadge,
  },
  statusTooltips: {
    official: '官方开发组件',
    community: '社区开发组件',
  },
  statusBadgesMobile: {
    community: approvedMobileBadge,
  },
}
