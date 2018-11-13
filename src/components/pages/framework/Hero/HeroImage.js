import React from 'react'
import { Flex, Box, Image } from 'serverless-design-system'

import frameworkIllustrator from 'src/assets/images/pages/framework/framework-illustration.svg'

const HeroImage = () => (
  <Flex.horizontallyCenter py={[0, 0, 3]} height={[0, 0, '100%']}>
    <Box width={[0, 0, 8 / 10]}>
      <Image src={frameworkIllustrator} maxHeight='258px' />
    </Box>
  </Flex.horizontallyCenter>
)

export default HeroImage
