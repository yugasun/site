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
  <Text color={color} fontSize='24px' lineHeight='38px' letterSpacing='-0.38px'>
    {children}
  </Text>
)

const DevelopersGuide = () => (
  <Background background='#f7f7f7' height='2194px'>
    <AppContainer>
      {guidesData.map((guide, index) => (
        <Flex
          key={index}
          flexDirection={index == 1 ? 'row-reverse' : 'row'}
          mb={42}
        >
          <Background width={0.5} background='white'>
            <Box py={92} px={72}>
              <TitleText color={'#fd5750'}>{guide.metaTitle}</TitleText>
              <TitleText color={'#000000'}>{guide.title}</TitleText>
              <P>{guide.content}</P>
              <Row justifyContent='space-between' width={0.85}>
                <InternalLink to={guide.actions[0].link}>
                  <Button>{guide.actions[0].text}</Button>
                </InternalLink>
                <InternalLink to={guide.actions[1].link}>
                  <Button>{guide.actions[1].text}</Button>
                </InternalLink>
              </Row>
            </Box>
          </Background>

          <Image src={guide.image} />
        </Flex>
      ))}
    </AppContainer>
  </Background>
)

export default DevelopersGuide
