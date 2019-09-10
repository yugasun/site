import React from 'react'
import { Flex } from 'serverless-design-system'
import slackNotificationsImage from 'src/assets/images/pages/integrations/slack-notifications.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const DevelopDeploy = props => (
  <Flex
    pt={[142, 142, 112, 112, 132]}
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Flex mx={'auto'}>
      <Image
        src={slackNotificationsImage}
        width={['100%', '100%', 300, 300, 300, 591]}
        height={[400, 400, 400, 400, 420, 302]}
      />
    </Flex>
  </Flex>
)

export default DevelopDeploy
