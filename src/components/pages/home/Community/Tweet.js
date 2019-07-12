import React from 'react'
import { Background, Flex, Image, Text, Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import styled from 'styled-components'
import { ExternalLink } from 'src/fragments'
import twitterIcon from 'src/assets/images/home/tweeters/twitter-icon.svg'

const StyledBackground = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;

  @media screen and (max-width: 415px) {
    min-width: 100%;
  }
`

const Tweet = ({ name, username, tweet, date, image, link }) => {
  return (
    <StyledBackground
      background={'#eaeaea'}
      minHeight={[384]}
      width={('100%', '100%', '50%', '80%', '384px')}
    >
      <Box>
        <ExternalLink to={link}>
          <Flex>
            <Image src={image} width={32} height={32} />
            <Flex mt={'6px'}>
              <Heading.h5 color={'#000'} ml={'12px'}>
                {name}
              </Heading.h5>
              <Heading.h5 color={'#8c8c8c'} ml={'12px'}>
                {username}
              </Heading.h5>
            </Flex>
          </Flex>
        </ExternalLink>
        <P color={'#5b5b5b'}>{tweet}</P>
      </Box>
      <Flex>
        <Image src={twitterIcon} width={'16px'} height={'13px'} />
        <Text
          ml={'12px'}
          color={'#8c8c8c'}
          fontSize={'12px'}
          lineHeight='16px'
          letterSpacing='0'
          fontFamily='Soleil'
        >
          Twitter | {date}
        </Text>
      </Flex>
    </StyledBackground>
  )
}

export default Tweet
