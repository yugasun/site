import React from 'react'
import { Background, Flex, Image, Text } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import styled from 'styled-components'
import { ExternalLink } from 'src/fragments'
import twitterIcon from 'src/assets/images/home/tweeters/twitter-icon.svg'

const StyledBackground = styled(Background)`
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
}) => {
  return (
    <StyledBackground background={bgColor} height={384} width={384}>
      <ExternalLink to={link}>
        <Flex>
          <Image src={image} />
          <Heading.h5 color={nameColor} ml={'12px'}>
            {name}
          </Heading.h5>
          <Text color={usernameColor} ml={'12px'}>
            {username}
          </Text>
        </Flex>
      </ExternalLink>
      <P color={tweetColor}>{tweet}</P>
      <Flex>
        <Image src={twitterIcon} />
        <Text ml={'12px'}>Twitter | {date}</Text>
      </Flex>
    </StyledBackground>
  )
}

export default Tweet
