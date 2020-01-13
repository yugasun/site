import React from 'react'
import { Box } from 'serverless-design-system'
import { Features } from 'src/fragments'
import zeroAdmin from 'src/assets/images/icon-circle.svg'
import autoScaling from 'src/assets/images/icon-vol-light.svg'
import payPerUse from 'src/assets/images/icon-graph-light.svg'
import increasedVelocity from 'src/assets/images/icon-audit.svg'

const featureItemsData = [
  {
    header: '零管理',
    img: zeroAdmin,
    content:
      '部署代码时无需提前配置或运维管理。没有集群，实例甚至操作系统的概念。',
  },
  {
    header: '自动扩缩容',
    img: autoScaling,
    content:
      '让服务供应商应对扩缩容策略，无需触发警报或编写脚本来对服务器集群做扩缩容。',
  },
  {
    header: '按使用付费',
    img: payPerUse,
    content: `“函数即服务”计算和托管服务根据使用情况而非预先提供的容量进行收费。您可以更大程度的利用资源，而不必为空闲时间付出高昂的服务费用。`,
  },
  {
    header: '敏捷开发',
    img: increasedVelocity,
    content: `缩短构建和部署到生产之间的步骤。由于无需关注部署前环境，及部署后运维管理，因此可以更敏捷的交付更多功能。`,
  },
]

const OverviewFeatures = () => (
  <Box mt={['10px', '10px', '10px', '10px', 40]}>
    <Features
      title='为什么使用 Serverless 架构？'
      description='应该了解的Serverless应用程序的4个关键特征'
      features={featureItemsData}
      leadingNumber={false}
      headingStyle={{ my: [4] }}
    />
  </Box>
)

export default OverviewFeatures
