import React from 'react'
import { Box } from 'serverless-design-system'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/urls'
import { Button } from 'src/fragments/DesignSystem'

const MobileCTA = props => (
  <ExternalLink to={dashboard}>
    <Box display={['block', 'block', 'none']} mt={42}>
      <Button width={['100%', '100%', 176]}>get started free</Button>
    </Box>
  </ExternalLink>
)

export default MobileCTA
