import React from 'react'
import { Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { ExternalLink } from 'src/fragments'
import { dashboard } from 'src/constants/urls'

const DashboardCTA = (props) => (
    <Flex style={{backgroundColor: '#f7f7f7'}} 
        p={'8px 20px'} flexDirection='column'
        mt={[62, 62, 62, 62, 92]}
    > 
        <P>
        To make the most of this tutorial series, &nbsp;
        <ExternalLink to={dashboard} style={{color: 'inherit', borderBottom: '1px solid #fd5750'}}>create a Serverless Framework PRO account for free</ExternalLink>
        </P>
    </Flex>
)

export default DashboardCTA