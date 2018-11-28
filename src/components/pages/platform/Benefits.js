import React from 'react'
import { Box } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { Heading } from 'src/components/pages/form-pages/Content'

const Benefits = () => (
    <Box mt={[0, 0, 0]}>
        <Heading>
            Team Collaboration and Onboarding
        </Heading>
        <P mb={62} mt={0}>
            Gain and share visibility across all serverless applications, the cloud resources they contain, and their deployments, in a single dashboard.
        </P>
        <Heading>
            Control and Security
        </Heading>
        <P mb={62} mt={0}>
            Control and secure your development operations with audit logs, cloud credential management, and more.
        </P>
        <Heading>
            Serverless Metrics
        </Heading>
        <P mb={62} mt={0}>
            Get tracing, error logging, monitoring, and alerts with the click of a button. Native Serverless Framework integration makes the configuration dead simple. 
        </P>
    </Box>
)

export default Benefits