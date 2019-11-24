import React from 'react'
import { Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/urls'

const DashboardCTA = (props) => (
    <Flex style={{backgroundColor: '#f7f7f7'}} 
        p={'8px 20px'} flexDirection='column'
        mt={[42]}
        mb={[22]}
        width={[1, 1, 1, 0.65]}
        mx={['initial', 'initial', 'initial', 'auto']}
    > 
        <P>
        To make the most of this tutorial, sign up for Serverless Framework’s dashboard account for free: <br />
        <ExternalLink to={dashboard} style={{color: 'inherit', borderBottom: '1px solid #fd5750'}} >https://dashboard.serverless.com</ExternalLink>
        </P>
    </Flex>
)

export default DashboardCTA