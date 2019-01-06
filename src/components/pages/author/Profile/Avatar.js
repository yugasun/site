import React from 'react'
import { Box, Image } from 'serverless-design-system'

const Avatar = ({ avatar }) => (
  <Box pb={1}>
    <Image
      height={["auto"]}
      width={[1, 1, 1, 'auto', 'auto', 280]}
      src={avatar.replace("140", "280")}
    />
  </Box>
)

Avatar.defaultProps = { avatar: '' }
export default Avatar
