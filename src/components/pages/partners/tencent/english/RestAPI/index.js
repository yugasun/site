import React from 'react'
import { Flex } from 'serverless-design-system'
import tencentSlsPluginImage from 'src/assets/images/pages/partners/cloud/tencent/tencent-cloud-serverless-plugin.png'
import Content from './Content'
import { ImageWithShadow as Image, ExternalLink } from 'src/fragments'
import { Button } from 'src/components'
import styles from '../Tencent.module.css'

const AllSignal = props => (
  <Flex
    py={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column-reverse', 'column-reverse', 'row']}
  >
    <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
        <Content />
        <div className={styles.contentCTA}>
          <ExternalLink to={'https://github.com/serverless-tencent/serverless-tencent-scf'}>
            <Button type='primary' text='Try now'/>
          </ExternalLink>
        </div>
    </Flex>
    <Image
      src={tencentSlsPluginImage}
      width={['100%', '100%', 350, 400, 450, 500]}
      height={[200, 200, 233, 266, 300, 333]}
    />
  </Flex>
)

export default AllSignal
