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
`

const Tweet = ({
  bgColor,
  name,
  nameColor,
  author,
  username,
  usernameColor,
  tweet,
  tweetColor,
  date,
  image,
  link,
  dateColor,
}) => {
  return (
    <StyledBackground
      background={bgColor}
      height={[384]}
      width={('100%', '100%', '50%', '80%', '384px')}
    >
      <Box>
        <ExternalLink to={link}>
          <Flex>
            <Image src={image} width={32} height={32} />
            <Flex mt={'6px'}>
              <Heading.h5 color={nameColor} ml={'12px'}>
                {name}
              </Heading.h5>
              <Text color={usernameColor} ml={'12px'}>
                {username}
              </Text>
            </Flex>
          </Flex>
        </ExternalLink>
        <P color={tweetColor}>{tweet}</P>
      </Box>
      <Flex>
        <Image src={twitterIcon} />
        <Text
          ml={'12px'}
          color={dateColor}
          fontSize={'12px'}
          lineHeight='16px'
          letterSpacing='0'
        >
          Twitter | {date}
        </Text>
      </Flex>
    </StyledBackground>
  )
}

export default Tweet
