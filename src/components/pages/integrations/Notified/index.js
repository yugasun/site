import React from 'react'
import { Flex } from 'serverless-design-system'
import slackNotificationsImage from 'src/assets/images/pages/integrations/slack-notifications.png'
import Content from './Content'
import { ImageWithShadow as Image } from 'src/fragments'

const IntegrationsNotified = () => (
  <Flex
    justifyContent='space-between'
    flexDirection={['column', 'column', 'row']}
  >
    <Content />
    <Flex mx={'auto'}>
      <Image
        src={slackNotificationsImage}
        width={['100%', '100%', 430, 450, 500, 591]}
        height={[200, 200, 220, 250, 270, 302]}
      />
    </Flex>
  </Flex>
)

export default IntegrationsNotified
