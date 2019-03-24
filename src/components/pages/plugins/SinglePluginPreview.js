import React from 'react'
import styled from 'styled-components'
import {
  Box,
  Text,
  Card,
  Image,
  Row,
  Absolute,
  Relative,
  Flex,
} from 'serverless-design-system'
import { InternalLink, ExternalLink } from 'src/fragments'
import { getPluginLink } from 'src/utils/plugins'
import { Heading, P } from 'src/fragments/DesignSystem'
import downloadIcon from 'src/assets/images/download-gray.svg'
import starIcon from 'src/assets/images/star-gray.svg'
import certifiedBadge from 'src/assets/images/pages/plugins/certified.svg'
import communityBadge from 'src/assets/images/pages/plugins/community.svg'
import approvedBadge from 'src/assets/images/pages/plugins/approved.svg'

const statusBadges = {
  certified: certifiedBadge,
  community: communityBadge,
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

const FlexWithFloat = styled(Flex)`
  float: right;
  @media screen and (max-width: 415px) {
    position: absolute;
    left: 0;
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

function nFormatter(num) {
  let formattedNumber
  if (num > 999 && num < 999999) {
    formattedNumber = (num / 1000).toFixed(2) + 'K'
    formattedNumber =
      formattedNumber.indexOf('.00') > -1
        ? formattedNumber.replace('.00', '')
        : formattedNumber
  } else if (num > 999999) {
    formattedNumber = (num / 1000000).toFixed(2) + 'M'
    formattedNumber =
      formattedNumber.indexOf('.00') > -1
        ? formattedNumber.replace('.00', '')
        : formattedNumber
  } else {
    formattedNumber = num
  }

  return formattedNumber
}

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
    <React.Fragment>
      <BoxWithMiddleElementMargin
        width={[1, 1, 1 / 2, 1 / 3, '22.5%', '280px']}
        mb={[42, 42, 32]}
      >
        <HoverableColumn>
          <FlexWithFloat>
            <Image src={statusBadges[status]} />
          </FlexWithFloat>
          <Box m={['0px 30px', '0px 30px', '32px']}>
            <InternalLink to={getPluginLink(id)}>
              <Box>
                <Row my='8px' pt='5px'>
                  <Box mt='-2px'>
                    <Image
                      maxHeight='16px'
                      src={starIcon}
                      objectFit='contain'
                    />
                  </Box>
                  &nbsp;
                  <Text
                    color='gray.2'
                    fontSize={[1]}
                    fontFamily='Soleil'
                    lineHeight={[1.33]}
                  >
                    {nFormatter(githubStars)}
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
                    {nFormatter(npmDownloads)}
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
    </React.Fragment>
  )
}

export default singleExamplePreview
