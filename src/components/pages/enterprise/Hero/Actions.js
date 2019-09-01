import React from 'react'
import { Flex, Box } from 'serverless-design-system'
import { Button, SecondaryButton } from 'src/fragments/DesignSystem'
import { AnchorLink } from 'src/fragments'
//TODO: refactor whitepaperModal - used in a hacky way
import { WhitepaperModal } from 'src/components'

const HomeActions = () => (
  <Flex mt={42} flexDirection={['column', 'column', 'row']}>
    <AnchorLink to={'#enterprise-contact-us'}>
      <Button width={['100%', '100%', 176]}>contact us</Button>
    </AnchorLink>
    <Box
      ml={[0, 0, 16, 16, 32]}
      mt={['12px', '12px', 0]}
      width={['100%', '100%', 176]}
    >
      <WhitepaperModal />
    </Box>
  </Flex>
)

export default HomeActions
