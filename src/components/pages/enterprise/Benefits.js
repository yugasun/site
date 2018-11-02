import React from 'react'
import { P, Heading, Box } from 'serverless-design-system'

const Benefits = () => (
    <Box mt={[0, 0, 0]}>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Get Support
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
        Get 24-hour support from the team behind the Serverless Framework and the Serverless Platform.
        </P>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Gain Visibility
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
        Get team access to the Serverless Dashboard, the vendor-neutral Serverless operations console. 
        </P>
        <Heading.h4 fontFamily='Soleil' lineHeight={'32px'} letterSpacing={'-0.4px'} mb={22}>
            Standardize Development
        </Heading.h4>
        <P fontFamily='SoleilBk' lineHeight={'26px'} mb={62} mt={0}>
        Get custom templates with policy enforcement to help standardize development across teams and onboard new team-members quickly.  
        </P>
    </Box>
)

export default Benefits