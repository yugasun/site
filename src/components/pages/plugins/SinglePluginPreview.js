import React from 'react'
import styled from 'styled-components'
import { Box, Text, Card, Image, Row, Absolute } from 'serverless-design-system'
import { InternalLink, ExternalLink } from 'src/fragments'
import { getPluginLink } from 'src/utils/plugins'
import { Heading, P } from 'src/fragments/DesignSystem'
import downloadIcon from 'src/assets/images/download-gray.svg'
import starIcon from 'src/assets/images/star-gray.svg'
import certifiedBadge from 'src/assets/images/pages/plugins/certified.svg'
import unverifiedBadge from 'src/assets/images/pages/plugins/unverified.svg'
import approvedBadge from 'src/assets/images/pages/plugins/approved.svg'

const statusBadges = {
  certified: certifiedBadge,
  unverified: unverifiedBadge,
  approved: approvedBadge,
}

const TextWithWordWrap = styled(P)`
  word-wrap: break-word;
`

const HoverableColumn = styled(Card)`
  @media screen and (min-width: 415px) {
    background-color: white;
    border: 1px solid #eaeaea;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
    &:hover {
      box-shadow: 2px 10px 24px 0 rgba(0, 0, 0, 0.08);
    }
  }
`

const BoxWithMiddleElementMargin = styled(Box)`
  @media screen and (min-width: 1230px) {
    :not(:nth-child(4n + 4)) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 415px) and (max-width: 769px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 769px) and (max-width: 1229px) {
    width: 33%;
    padding: 0 20px;
  }
`

const singleExamplePreview = ({ id, frontmatter }) => {
  const {
    title,
    description,
    gitLink,
    npmDownloads,
    status,
    githubStars,
  } = frontmatter

  return (
    <BoxWithMiddleElementMargin
      width={[1, 1, 1 / 2, 1 / 3, '22.5%', '280px']}
      mb={[42, 42, 32]}
    >
      <HoverableColumn>
        <Box m={['0px 15px', '0px 15px', '32px']}>
          <InternalLink to={getPluginLink(id)}>
            <Box>
              <Absolute mt={-33} ml={192}>
                <Image src={statusBadges[status]} />
              </Absolute>
              <Row my='8px' pt='5px'>
                <Box mt='-2px'>
                  <Image maxHeight='16px' src={starIcon} objectFit='contain' />
                </Box>
                &nbsp;
                <Text
                  color='gray.2'
                  fontSize={[1]}
                  fontFamily='Soleil'
                  lineHeight={[1.33]}
                >
                  {githubStars}
                </Text>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Image
                  maxHeight='16px'
                  src={downloadIcon}
                  objectFit='contain'
                />
                &nbsp;
                <Text
                  color='gray.2'
                  fontSize={[1]}
                  fontFamily='Soleil'
                  lineHeight={[1.33]}
                >
                  {npmDownloads}
                </Text>
              </Row>

              <Heading.h5 mb='8px'>{title}</Heading.h5>
            </Box>
          </InternalLink>
          <TextWithWordWrap mt='8px' mb={[0, 0, 3.6]}>
            {description}
          </TextWithWordWrap>
          <ExternalLink to={gitLink}>
            <Text color='#fd5750' mt={16}>
              go to github >
            </Text>
          </ExternalLink>
        </Box>
      </HoverableColumn>
    </BoxWithMiddleElementMargin>
  )
}

export default singleExamplePreview
