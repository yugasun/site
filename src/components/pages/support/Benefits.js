import React from 'react'
import { Box } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { Heading } from 'src/components/pages/form-pages/Content'

const Benefits = () => (
    <Box mt={[0, 0, 0]}>
        <Heading>
            World-class support
        </Heading>
        <P mb={62} mt={0}>
            Get collaborative, world-class support from the team that brought you the Serverless Framework and innovated the Serverless application.
        </P>
        <Heading>
            Serverless Enablement 
        </Heading>
        <P mb={62} mt={0}>
            Work with Serverless and cloud services experts who can help you successfully build, deploy, and manage your serverless applications.
        </P>
        <Heading>
            Serverless Training
        </Heading>
        <P mb={62} mt={0}>
            Enable your team with the most proven Serverless development practices. We offer comprehensive workshops both in-person and remote. 
        </P>
    </Box>
)

export default Benefits