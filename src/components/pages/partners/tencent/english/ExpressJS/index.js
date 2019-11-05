import React from 'react'
import { Flex } from 'serverless-design-system'
import expressJsImage from 'src/assets/images/pages/partners/cloud/tencent/express-js-tencent.png'
import Content from './Content'
import { ImageWithShadow as Image, ExternalLink } from 'src/fragments'
import { Button } from 'src/components'
import styles from '../Tencent.module.css'

const ExpressJSTencent = props => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column-reverse', 'column-reverse', 'row']}
    id='expressjs-tencent'
  >
    <Flex flexDirection='column' width={[1, 1, 0.4, 0.5, 0.4]}>
        <Content />
        <div className={styles.contentCTA}>
          <ExternalLink to={'https://github.com/serverless-components/tencent-express'}>
            <Button type='primary' text='Try now'/>
          </ExternalLink>
        </div>
    </Flex>
    <Image
      src={expressJsImage}
      width={['100%', '100%', 350, 400, 450, 500]}
      height={[200, 200, 233, 266, 300, 333]}
    />
  </Flex>
)

export default ExpressJSTencent
