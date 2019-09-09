import React from 'react'
import { Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { InternalLink } from 'src/fragments'
import Share from 'src/components/pages/learn/course/Details/Share.js'

const MoreInfoShare = props => (
  <Flex
    justifyContent='space-between'
    width={[1, 1, 0.85, 0.85, 1]}
    alignItems={['left', 'left', 'center']}
    mx={['inherit', 'inherit', 'auto']}
    flexDirection={['column-reverse', 'column-reverse', 'row']}
  >
    <InternalLink to={'/learn/full-stack-application-development-on-aws/'}>
      <P color='#fd5750'>more info ></P>
    </InternalLink>
    <Flex alignItems='center'>
      <Share />
    </Flex>
  </Flex>
)

export default MoreInfoShare
