import React from 'react'
import { AppContainer }  from 'src/components'
import { Box, Heading, Column, Image, Text, Flex } from 'serverless-design-system'

//TODO: specific for the /framework page for now, make universal?
const UseCaseList = ({data}) => (
        <Box
        pb={[0, 0, 162]}
      >
      {
        data.map((useCase, index) => {
          const isEvenItem = index % 2 == 0
          return (
            <Flex flexDirection={['column-reverse', 'column-reverse', isEvenItem ? 'row': 'row-reverse']} key={index} pt={[92, 92, 162]}>
              <Column width={['auto', 'auto', '40%']}>
                <Heading.h4 fontFamily='Soleil'>{useCase.title}</Heading.h4>
                <Text.p fontFamily='SoleilBk' lineHeight='26px' color='gray.3'>{useCase.description}</Text.p>
              </Column>
              <Flex alignItems='center' justifyContent='center' width={['auto', 'auto', '40%']} height={['auto', 'auto']} ml={[0, 0, isEvenItem ? '17%' : 0]} mr={[0, 0, isEvenItem ? 0 : '14%']} mt={0} mb={[4, 4, 0]}>
                <Image src={useCase.imgSrc}></Image>
              </Flex>
            </Flex>
          )
        })
      }
        </Box>
)

export default UseCaseList