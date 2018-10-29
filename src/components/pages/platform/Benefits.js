import React from 'react'
import { P, Heading, Box } from 'serverless-design-system'

const Benefits = () => (
    <Box>
        <Heading.h4 fontFamily='Soleil'>
            Team Collaboration and Onboarding
        </Heading.h4>
        <P fontFamily='SoleilBk' mb={62}>
            Gain and share visibility across all serverless applications, the cloud resources they contain, and their deployments, in a single dashboard.
        </P>
        <Heading.h4 fontFamily='Soleil'>
            Control and Security
        </Heading.h4>
        <P fontFamily='SoleilBk' mb={62}>
            Control and secure your development operations with audit logs, cloud credential management, and more.
        </P>
        <Heading.h4 fontFamily='Soleil'>
            Serverless Metrics
        </Heading.h4>
        <P fontFamily='SoleilBk' mb={62}>
            Get tracing, error logging, monitoring, and alerts with the click of a button. Native Serverless Framework integration makes the configuration dead simple. 
        </P>
    </Box>
)

export default Benefits