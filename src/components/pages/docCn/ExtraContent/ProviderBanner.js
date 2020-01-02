import React from 'react'
import { Background, Image } from 'serverless-design-system'
import styled from 'styled-components'

const FlexBackground = styled(Background)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`

const providerLogo = {
  aws:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/aws-logo.svg',
  azure:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/azure-logo.svg',
  cloudflare:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/cloudflare-logo.svg',
  fn:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/fn-logo.svg',
  google:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/google-logo.png',
  kubeless:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/kubeless-logo.svg',
  openwhisk:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/openwhisk-logo.svg',
  spotinst:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/spotinst-logo.svg',
  aliyun:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/docs/alibaba-cloud-logo-gray.png',
  tencent: 
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/docs/tencent-cloud-logo.png',
  knative:
    'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/images/docs/knative-logo.svg'
}

const ExtraContent = ({ provider }) => (
  <FlexBackground background='#eaeaea' width='100%' height='232px'>
    <Image
      src={providerLogo[provider]}
      width={provider === 'google' || provider === 'aliyun' || provider === 'tencent' || provider === 'knative' ? [206] : [176]}
      height={provider === 'google' || provider === 'aliyun' || provider === 'tencent' || provider === 'knative' ? [110] : [176]}
    />
  </FlexBackground>
)

export default ExtraContent
