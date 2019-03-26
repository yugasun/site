import React from 'react'

import { Box, Text, Flex } from 'serverless-design-system'
const dashboardOverviewVideo =
  'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/enterprise/serverless-framework-enterprise-dashboard-overview-dark_SMALL.mp4'
import ReactPlayer from 'react-player'

const EnterpriseHeroBenefit = () => (
  <Box mt={[6, 6, 6, 6, 6]} mb={[0, 0, 0, 0, 15]}>
    <Flex
      width={[1, 1, 0.8]}
      mx='auto'
      mt={[0, 0, 0, 0, 92]}
      justifyContent='center'
    >
      <ReactPlayer
        url={dashboardOverviewVideo}
        playing={true}
        loop={true}
        width={['90%', '90%', '90%', '90%', '60%']}
        muted={true}
        height={['250px', '250px', '300px', '300px', '537px']}
      />
    </Flex>
  </Box>
)

export default EnterpriseHeroBenefit
