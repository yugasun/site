import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'
import { Heading } from 'src/components/pages/form-pages/Content'

//TODO: loop instead
const Benefits = ({benefits}) => (
    <Flex mt={[0, 0, 0]} flexDirection={['column', 'column', 'row', 'row', 'column']}>
        <Box mr={[0, 0, '17px', '17px', 0, 0]}>
            <Heading>
                {benefits[0].heading}
            </Heading>
            <P mb={62} mt={0}>
                {benefits[0].body}
            </P>
        </Box>
        <Box mr={[0, 0, '17px', '17px', 0, 0]}>
            <Heading>
                {benefits[1].heading}
            </Heading>
            <P mb={62} mt={0}>
                {benefits[1].body}
            </P>
        </Box>
        <Box>
            <Heading>
                {benefits[2].heading}
            </Heading>
            <P mb={62} mt={0}>
                {benefits[2].body}
            </P>
        </Box>
    </Flex>
)

export default Benefits