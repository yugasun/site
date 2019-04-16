import React from 'react'
import { Card, Flex, Box, Text, Row } from 'serverless-design-system'
import { Heading, PageContainer } from 'src/fragments/DesignSystem'

const CloneThisExample = ({ id }) => (
  <Box display={['none', 'none', 'none', 'none', 'block']}>
    <PageContainer>
      <Box pt={32}>
        <Heading.h3>Clone This Example</Heading.h3>
      </Box>
      <Flex justifyContent='center' flexDirection='column' pb={22}>
        <Card border='solid 1px #eaeaea'>
          <Box p={24}>
            <Row>
              <Box width={0.1}>
                <Text color='#000' fontSize='14px'>
                  Step #1 -{' '}
                </Text>
              </Box>
              <Box width={0.9}>
                <Text color='#795da3' fontSize='14px'>
                  npm install serverless -g
                </Text>
              </Box>
            </Row>
            <Row mt={1}>
              <Box width={0.1}>
                <Text color='#000' fontSize='14px'>
                  Step #2 -{' '}
                </Text>
              </Box>
              <Box width={0.9}>
                <Text color='#795da3' fontSize='14px'>
                  serverless install -u
                  https://github.com/serverless/examples/tree/master/
                  {id} -n &nbsp;
                  {id}
                </Text>
              </Box>
            </Row>
          </Box>
        </Card>
      </Flex>
    </PageContainer>
  </Box>
)

export default CloneThisExample
