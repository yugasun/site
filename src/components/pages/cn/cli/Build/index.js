import React from 'react'
import { Flex } from 'serverless-design-system'
import Content from './Content'
import styles from '../CLI.module.css'

const InvocationsExplorer = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <video muted className={styles.cliVideo} autoPlay loop>
      <source
        src='https://serverless-cn-1253970226.cos.ap-guangzhou.myqcloud.com/Product/cli/CLI01.mp4'
        type='video/mp4'
      />
    </video>
  </Flex>
)

export default InvocationsExplorer
