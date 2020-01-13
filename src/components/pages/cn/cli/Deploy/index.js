import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import styles from '../CLI.module.css'

const StraightToCode = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Content />
    <video muted className={styles.cliVideo} autoPlay loop>
      <source
        src='https://serverless-cn-1253970226.cos.ap-guangzhou.myqcloud.com/Product/cli/CLI02.mp4'
        type='video/mp4'
      />
    </video>
  </Flex>
)

export default StraightToCode
