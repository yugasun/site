import React from 'react'
import {
  Flex,
  Relative,
  Image,
  Card,
  Text,
  Box,
} from 'serverless-design-system'
import { Heading, P } from 'src/fragments/DesignSystem'
import member1 from 'src/assets/images/meetupMember11.png'
import member2 from 'src/assets/images/meetupMember12.png'
import member3 from 'src/assets/images/meetupMember13.png'
import member4 from 'src/assets/images/meetupMember14.png'

var shuffleArray = arr => arr.sort(() => Math.random() - 0.5)
function getMemberImages() {
  let allImages = [member1, member2, member3, member4]
  return shuffleArray(allImages)
}

const MeetupCard = ({ title, schedule, address, attending }) => (
  <Relative
    maxWidth={['350px', '350px', '450px', '350px', '280px', '350px']}
    mx={[0, 0, 2]}
    my={[1, 1, 2]}
  >
    <Card
      width={1}
      border='1px solid #dfe5e6'
      boxShadow='2px 2px 8px 0 #dfe5e6'
      p={3}
    >
      <Heading.h4
        fontFamily='Soleil'
        lineHeight={3}
        letterSpacing='h5'
        color='black'
      >
        {title}
      </Heading.h4>
      <P color='gray.3' fontFamily='SoleilBk' lineHeight={4} mb={0.9}>
        {schedule.date}
      </P>
      <Text fontSize={0} lineHeight={3} color='gray.2'>
        {schedule.time}
      </Text>
      <Heading.h5 fontFamily='SoleilBk' mt={4}>
        {address.firstLine}
      </Heading.h5>
      <P fontFamily='SoleilBk' color='gray.3' m={0}>
        {address.secondLine}
      </P>
      <Text fontSize={'12px'} fontFamily='Soleil' color='gray.2' mt={2} mb={1}>
        Attending:
      </Text>
      <Flex>
        <React.Fragment>
          {getMemberImages().map((imgSrc, index) => (
            <Box key={index} mr={'2px'}>
              <Image src={imgSrc} width='32px' height='32px' />
            </Box>
          ))}
          <Flex.center bg='gray.1' width='32px' height='32px'>
            <Text.span fontSize={0} color='gray.2' fontWeight='bold'>
              {`${attending.plusCount}+`}
            </Text.span>
          </Flex.center>
        </React.Fragment>
      </Flex>
    </Card>
  </Relative>
)

export default MeetupCard
