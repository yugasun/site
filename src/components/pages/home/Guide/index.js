import React from 'react'
import {
  Flex,
  Background,
  Row,
  Image,
  Text,
  Box,
} from 'serverless-design-system'
import { AppContainerNewest as AppContainer } from 'src/components'
import guidesData from './Data'
import { InternalLink } from 'src/fragments'
import { P, Button } from 'src/fragments/DesignSystem'

const TitleText = ({ children, color }) => (
  <Text
    color={color}
    fontFamily='Soleil'
    fontSize='24px'
    lineHeight='38px'
    letterSpacing='-0.38px'
    align='center'
  >
    {children}
  </Text>
)

const DevelopersGuide = () => (
  <Background background='#f7f7f7' height={[2079, 2079, 2675, 2675, 604]}>
    <AppContainer>
      <Flex
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        width={[1, 1, 0.7, 0.7, 1]}
      >
        {guidesData.map((guide, index) => (
          <Flex
            key={index}
            flexDirection={'column'}
            mb={42}
            px={index === 1 ? '32px' : 0}
          >
            <Box mt={[0, 0, 0, 0, '-300px']}>
              <Image
                src={guide.image}
                maxHeight={[234, 234, 234, 234, 300]}
                maxWidth={[300, 300, 300, 300, 384]}
              />
            </Box>
            <Background background='white'>
              <Box py={62} px={32}>
                <TitleText color={'#fd5750'}>{guide.metaTitle}</TitleText>
                <TitleText color={'#000000'}>{guide.title}</TitleText>
                <P>{guide.content}</P>
                <Flex.verticallyCenter
                  justifyContent='space-between'
                  flexDirection={['column', 'column', 'row']}
                >
                  <InternalLink to={guide.actions[0].link}>
                    <Button>{guide.actions[0].text}</Button>
                  </InternalLink>
                  <InternalLink to={guide.actions[1].link}>
                    <Text
                      fontSize='16px'
                      lineHeight='14px'
                      letterSpacing='0.67px'
                      color='#fd5750'
                    >
                      {guide.actions[1].text}
                    </Text>
                  </InternalLink>
                </Flex.verticallyCenter>
              </Box>
            </Background>
          </Flex>
        ))}
      </Flex>
    </AppContainer>
  </Background>
)

export default DevelopersGuide
