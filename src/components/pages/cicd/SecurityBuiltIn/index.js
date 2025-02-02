import React from 'react'
import { Flex, Image, Box } from 'serverless-design-system'
import securelyManage1Image from 'src/assets/images/pages/cicd/securely-manage-1.png'
import securelyManage2Image from 'src/assets/images/pages/cicd/securely-manage-2.png'
import Content from './Content'
import { ImageWithShadow } from 'src/fragments'

const SecurityBuiltIn = () => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Flex flexDirection='column'>
      <Image
        src={securelyManage1Image}
        width={['100%', '100%', 350, 450, 463, 463]}
        height={['73%', '73%', 226, 336, 336, 336]}
      />
      <Box ml={[75, 75, 100, 131]} mt={[-52, -52, -52, -72]}>
        <ImageWithShadow
          src={securelyManage2Image}
          width={['100%', '100%', 326, 426, 435, 435]}
          height={['98%', '98%', 326, 426, 426, 426]}
        />
      </Box>
    </Flex>
  </Flex>
)

export default SecurityBuiltIn
