import React from 'react'
import { Box, Flex } from 'serverless-design-system'
import { Heading } from 'src/fragments/DesignSystem'
import { AppContainer } from 'src/components'
import UseCaseList from './UseCaseList'

const UseCasesNew = ({ useCaseHeader, useCaseSubHeader, cases }) => (
    <AppContainer>
      <Flex.horizontallyCenter flexDirection='column'>
        {
          ( useCaseHeader || useCaseSubHeader ) && (
            <Box mt={[5, 5, 8]} mb={2}>
              <Heading.h3
                align={'center'}
                my={1}
              >
                {useCaseHeader}
              </Heading.h3>
              <Box width={['auto', 'auto', '66%', '66%', '48%', '590px']} m={[null, null, 'auto']}>
                <Heading.h4 align={'center'} color='gray.2'>
                  {useCaseSubHeader}
                </Heading.h4>
              </Box>
            </Box>
          )
        }
        <Box>
          <UseCaseList data={cases} />
        </Box>
      </Flex.horizontallyCenter>
    </AppContainer>
)

export default UseCasesNew
