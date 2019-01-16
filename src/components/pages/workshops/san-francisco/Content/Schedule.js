import React from 'react'
import { TitleWithIconNew as TitleWithIcon } from 'src/fragments'
import { Flex, Box, Text } from 'serverless-design-system'
import styled from 'styled-components'
import { P } from 'src/fragments/DesignSystem'

const StyledTable = styled('table')`
  table {
    border-collapse: collapse;
  }

  thead th {
    background: white;
    color: #5b5b5b;
  }

  tbody td {
    background: white;
    border-bottom: 1px solid #9b9b9b;
  }

  tr td {
    width: 25%;
  }

  tr td:first-child {
    width: 16%;
  }
`

const ListItem = styled(Text)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0;
  font-family: 'Soleil';
`

const SubListItem = styled(ListItem)``

const ListBox = styled(Box)`
  margin-top: 12px;
`

const Schedule = () => (
  <Flex mb={[500]} mt={[140]} alignItems='center' flexDirection='column'>
    <TitleWithIcon mx='auto'>Schedule</TitleWithIcon>
    <Box width={[1, 1, 1, 1, '800px']}>
      <StyledTable>
        <tbody>
          <tr>
            <td>
              <P>10:00AM – 10:30AM</P>
            </td>
            <td>
              <P>Intro, Housekeeping, Tooling Check</P>
            </td>
          </tr>
          <tr>
            <td>
              <P>10:30AM – 12:30PM</P>
            </td>
            <td>
              <P>
                Deploying with Serverless: Intro &amp; Workshop <br />
                <ListBox>
                  <ListItem>Serverless background</ListItem>
                  <ListItem>Deploying a function &amp; API</ListItem>
                </ListBox>
              </P>
            </td>
          </tr>
          <tr>
            <td>
              <P>12:30PM – 01:30PM</P>
            </td>
            <td>
              <P>Break: Lunch &amp; Extra Help</P>
            </td>
          </tr>
          <tr>
            <td>
              <P>1:30PM – 3:45PM</P>
            </td>
            <td>
              <P>
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
            </td>
          </tr>
          <tr>
            <td>
              <P>3:45PM – 4:30PM</P>
            </td>
            <td>
              <P>
                Organizations, teams &amp; culture with serverless
                <ListBox>
                  <ListItem>Organizing code and teams</ListItem>
                  <ListItem>Devops and CI / CD</ListItem>
                  <ListItem>Culture and ownership</ListItem>
                </ListBox>
              </P>
            </td>
          </tr>
          <tr>
            <td>
              <P>4:30PM – 5:00PM</P>
            </td>
            <td>
              <P>Where to go from here, reviews, Q&A, happy hour</P>
            </td>
          </tr>
        </tbody>
      </StyledTable>
    </Box>
  </Flex>
)

export default Schedule
