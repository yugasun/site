import React from 'react'
import { Card, Flex, Box, Text } from 'serverless-design-system'
import { Heading, PageContainer } from 'src/fragments/DesignSystem'

const CloneThisExample = () => (
  <Box display={['none', 'none', 'none', 'none', 'block']}>
    <PageContainer>
      <Box pt={32}>
        <Heading.h3>Clone This Example</Heading.h3>
      </Box>
      <Flex justifyContent='center' flexDirection='column' pb={22}>
        <Card border='solid 1px #eaeaea'>
          <Box p={24}>
            <Box>
              <Text color='#795da3' fontSize='14px'>
                <span style={{ color: 'black' }}>Step #1 </span>- npm install
                serverless -g
              </Text>{' '}
            </Box>
            <Box mt={1}>
              <Text color='#795da3' fontSize='14px'>
                <span style={{ color: 'black' }}>Step #2 </span> - serverless
                install -u
                https://github.com/serverless/examples/tree/master/XYZ -n
                my-project
              </Text>
            </Box>
          </Box>
        </Card>
      </Flex>
    </PageContainer>
  </Box>
)

export default CloneThisExample
