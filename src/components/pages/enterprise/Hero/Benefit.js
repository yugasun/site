import React from 'react'

import { Box, Text, Flex } from 'serverless-design-system'
const dashboardOverviewVideo =
  'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-framework-enterprise-dashboard-overview-dark_SMALL.mp4'
import ReactPlayer from 'react-player'

const EnterpriseHeroBenefit = () => (
  <Box mt={[6, 6, 6, 6, 10]} mb={[0, 0, 0, 0, 48]}>
    <Box width={[1, 1, 0.69, 0.69, 0.65]} mx='auto'>
      <Text
        color='white'
        align='center'
        fontSize={[24, 24, 24, 24, 32]}
        fontFamily='Soleil'
        letterSpacing={['-0.38px', '-0.38px', '-0.38px', '-0.38px', '-0.5px']}
        lineHeight={['38px', '38px', '38px', '38px', '44px']}
        mb={[5, 5, 5, 5, 0]}
      >
        The total serverless solution
      </Text>
    </Box>
    <Flex
      width={[1, 1, 0.69, 0.69, 1]}
      mx='auto'
      mt={[0, 0, 0, 0, 105]}
      justifyContent='center'
    >
      <ReactPlayer
        url={dashboardOverviewVideo}
        playing={true}
        loop={true}
        width={['90%', '90%', '90%', '90%', '80%']}
        muted={true}
        height={['250px', '250px', '300px', '300px', '537px']}
      />
    </Flex>
  </Box>
)

export default EnterpriseHeroBenefit
