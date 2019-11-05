import React from 'react'
import { Flex } from 'serverless-design-system'
import serverlessWebsiteImage from 'src/assets/images/pages/partners/cloud/tencent/serverless-website-tencent.png'
import Content from './Content'
import { ImageWithShadow as Image, ExternalLink } from 'src/fragments'
import { Button } from 'src/components'
import styles from '../Tencent.module.css'

const CustomPolicies = props => (
  <Flex
    pt={[92, 92, 92, 92, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row-reverse']}
  >
    <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
        <Content />
        <div className={styles.contentCTA}>
          <ExternalLink to={'https://github.com/serverless-components/tencent-website'}>
            <Button type='primary' text='Try now'/>
          </ExternalLink>
        </div>
    </Flex>
    <Image
      src={serverlessWebsiteImage}
      width={['100%', '100%', 336, 450, 500, 500]}
      height={[260, 260, 300, 340, 333, 333]}
    />
  </Flex>
)

export default CustomPolicies
