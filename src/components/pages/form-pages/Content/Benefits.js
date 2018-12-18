import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { Heading } from 'src/components/pages/form-pages/Content'

//TODO: loop instead
const Benefits = ({benefits}) => (
    <Flex mt={[0, 0, 0]} flexDirection={['column', 'column', 'row', 'row', 'column']}>
        {
            benefits.map(({ heading, body }) => (
                <Box mr={[0, 0, '17px', '17px', 0, 0]} key={heading}>
                    <Heading>
                        {heading}
                    </Heading>
                    <P mb={62} mt={0}>
                        {body}
                    </P>
                </Box>
            ))
        }
    </Flex>
)

export default Benefits