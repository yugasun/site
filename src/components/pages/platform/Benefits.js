import React from 'react'
import { P, Heading, Box } from 'serverless-design-system'

const Benefits = () => (
    <Box mt={[0, 0, 0]}>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Team Collaboration and Onboarding
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
            Gain and share visibility across all serverless applications, the cloud resources they contain, and their deployments, in a single dashboard.
        </P>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Control and Security
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
            Control and secure your development operations with audit logs, cloud credential management, and more.
        </P>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Serverless Metrics
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
            Get tracing, error logging, monitoring, and alerts with the click of a button. Native Serverless Framework integration makes the configuration dead simple. 
        </P>
    </Box>
)

export default Benefits