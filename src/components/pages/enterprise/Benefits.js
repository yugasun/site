import React from 'react'
import { Box } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { Heading } from 'src/components/pages/form-pages/Content'

const Benefits = () => (
    <Box mt={[0, 0, 0]}>
        <Heading>
            Get Support
        </Heading>
        <P mb={62} mt={0}>
        Get 24-hour support from the team behind the Serverless Framework and the Serverless Platform.
        </P>
        <Heading>
            Gain Visibility
        </Heading>
        <P mb={62} mt={0}>
        Get team access to the Serverless Dashboard, the vendor-neutral Serverless operations console. 
        </P>
        <Heading>
            Standardize Development
        </Heading>
        <P mb={62} mt={0}>
        Get custom templates with policy enforcement to help standardize development across teams and onboard new team-members quickly.  
        </P>
    </Box>
)

export default Benefits