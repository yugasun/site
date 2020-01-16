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
    flexDirection={['column-reverse', 'column-reverse', 'row-reverse']}
  >
    <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
        <Content />
        <div className={styles.contentCTA}>
          <ExternalLink to={'https://github.com/serverless-components/tencent-website/blob/master/README_CN.md'}>
            <Button type='primary' text='现在试试'/>
          </ExternalLink>
        </div>
    </Flex>
    <Image
      src={serverlessWebsiteImage}
      width={['100%', '100%', 350, 400, 450, 500]}
      height={[200, 200, 233, 266, 300, 333]}
    />
  </Flex>
)

export default CustomPolicies
