import React from 'react'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import { Flex, Box, Text } from 'serverless-design-system'
import styled from 'styled-components'
import { P } from 'src/fragments/DesignSystem'
import { AppContainerNewest as AppContainer } from 'src/components'

const FlexWithBottomBorder = styled(Flex)`
  border-bottom: 1px solid #9b9b9b;
  margin-top: 35px;
  padding-bottom: 12px;
`

const ListItem = styled(Text)`
  &:before {
    content: '•     ';
    white-space: pre;
  }
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  font-family: 'Soleil';
`

const SubListItem = styled(ListItem)`
  margin-left: 35px;
`

const ListBox = styled(Box)`
  margin-top: 12px;
`

const PWithWidth = styled(P)`
  width: 40%;

  @media screen and (max-width: 415px) {
    width: 100%;
  }
`

const Schedule = () => (
  <AppContainer>
    <Flex
      mb={[102, 102, 122, 122, 162]}
      alignItems='center'
      flexDirection='column'
    >
      <TitleWithIcon mx='auto'>Schedule</TitleWithIcon>
      <Box width={[1, 1, 1, 1, '800px']}>
        <Box>
          <FlexWithBottomBorder flexDirection={['column', 'column', 'row']}>
            <PWithWidth m={0}>10:00AM – 10:30AM</PWithWidth>
            <P m={0}>Intro, Housekeeping, Tooling Check</P>
          </FlexWithBottomBorder>
          <FlexWithBottomBorder flexDirection={['column', 'column', 'row']}>
            <PWithWidth m={0}>10:30AM – 12:30PM</PWithWidth>
            <P m={0}>
              Deploying with Serverless: Intro &amp; Workshop <br />
              <ListBox>
                <ListItem>Serverless background</ListItem>
                <ListItem>Deploying a function &amp; API</ListItem>
              </ListBox>
            </P>
          </FlexWithBottomBorder>
          <FlexWithBottomBorder flexDirection={['column', 'column', 'row']}>
            <PWithWidth m={0}>12:30PM – 01:30PM</PWithWidth>

            <P m={0}>Break: Lunch &amp; Extra Help</P>
          </FlexWithBottomBorder>
          <FlexWithBottomBorder flexDirection={['column', 'column', 'row']}>
            <PWithWidth m={0}>1:30PM – 3:45PM</PWithWidth>

            <P m={0}>
              Event Driven with Serverless: Intro &amp; Workshop
              <ListBox>
                <ListItem>
                  Event driven computing background
                  <SubListItem>Security</SubListItem>
                  <SubListItem>Operations</SubListItem>
                </ListItem>
                <ListItem>
                  Deploying event driven services
                  <SubListItem>
                    Reacting to security events with code
                  </SubListItem>
                </ListItem>
              </ListBox>
            </P>
          </FlexWithBottomBorder>
          <FlexWithBottomBorder flexDirection={['column', 'column', 'row']}>
            <PWithWidth m={0}>3:45PM – 4:30PM</PWithWidth>

            <P m={0}>
              Organizations, teams &amp; culture with serverless
              <ListBox>
                <ListItem>Organizing code and teams</ListItem>
                <ListItem>Devops and CI / CD</ListItem>
                <ListItem>Culture and ownership</ListItem>
              </ListBox>
            </P>
          </FlexWithBottomBorder>
          <FlexWithBottomBorder flexDirection={['column', 'column', 'row']}>
            <PWithWidth m={0}>4:30PM – 5:00PM</PWithWidth>

            <P m={0}>Where to go from here, reviews, Q&A, happy hour</P>
          </FlexWithBottomBorder>
        </Box>
      </Box>
    </Flex>
  </AppContainer>
)

export default Schedule
