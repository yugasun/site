import React from 'react'
import { Background, Flex, Image, Text, Box } from 'serverless-design-system'
import { P, Heading } from 'src/fragments/DesignSystem'
import styled from 'styled-components'
import { ExternalLink } from 'src/fragments'

const StyledBackground = styled(Background)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 62px 32px;

  @media screen and (max-width: 415px) {
    min-width: 100%;
  }
`

const Tweet = ({ name, username, tweet, date, image, link }) => {
  return (
    <StyledBackground
      background={'#eaeaea'}
      minHeight={[340, 340, 340, 340, 360]}
      width={('100%', '100%', '40%', '80%', '384px')}
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
        <P color={'#5b5b5b'} mb={0} mt={25}>
          {tweet}
        </P>
      </Box>
    </StyledBackground>
  )
}

export default Tweet
