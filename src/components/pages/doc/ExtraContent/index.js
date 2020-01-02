import React from 'react'
import ProviderBanner from './ProviderBanner'

const providers = [
  'AWS',
  'azure',
  'openwhisk',
  'google',
  'kubeless',
  'spotinst',
  'fn',
  'cloudflare',
  'aliyun',
  'tencent',
  'knative'
]

const ExtraContent = ({ gitLink }) => (
  <React.Fragment>
    {providers.map(
      provider =>
        gitLink == `/docs/providers/${provider}/README.md` ? (
          <ProviderBanner provider={provider} key={provider} />
        ) : null
    )}
  </React.Fragment>
)

export default ExtraContent
