import React from 'react'
import { Flex } from 'serverless-design-system'
import githubImage from 'src/assets/images/pages/cicd/github-pr.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const PreviewDeploys = () => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <Image
      src={githubImage}
      width={['100%', '100%', 380, 450, 520, 548]}
      height={['45%', '45%', 170, 201, 232, 245]}
    />
  </Flex>
)

export default PreviewDeploys
