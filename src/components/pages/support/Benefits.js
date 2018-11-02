import React from 'react'
import { P, Heading, Box } from 'serverless-design-system'

const Benefits = () => (
    <Box mt={[0, 0, 0]}>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            World-class support
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
            Get collaborative, world-class support from the team that brought you the Serverless Framework and innovated the Serverless application.
        </P>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Serverless Enablement 
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
            Work with Serverless and cloud services experts who can help you successfully build, deploy, and manage your serverless applications.
        </P>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Serverless Training
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
            Enable your team with the most proven Serverless development practices. We offer comprehensive workshops both in-person and remote. 
        </P>
    </Box>
)

export default Benefits