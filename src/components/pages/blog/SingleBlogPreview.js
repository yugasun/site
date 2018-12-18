import React from 'react'
import {
  Background,
  Box,
  Row,
  Text
} from 'serverless-design-system'
import { InternalLink } from 'src/fragments'
import { getLinkComponent } from 'src/components/BlockLink'
import {
  getAuthorLink,
  getBlogLink,
  getCategoryLink,
  getAuthorInfo,
  getCategoryNameById,
} from 'src/utils/blog'
import { formatDate } from 'src/utils/date'
import ImagePlaceholder from './ImagePlaceholder'
import { Heading, P } from 'src/fragments/DesignSystem'

const HyperLinkBackground = getLinkComponent(Background)
const HyperLinkImagePlaceholder = getLinkComponent(ImagePlaceholder)

export default ({ id, frontmatter }) => {
  const { title, date, description, category: categoryIds, thumbnail } = frontmatter
  const author = getAuthorInfo({ frontmatter })

  return (
    <Row mb={[3, 3, 4, 6]}>
      <Box
        width={[1, 1, 1, 0.6]}
        pr={[15, 15, 15, '10%']}
      >
        <Box width={[1, 1, 1, 0.75]}>
          <Text.span
            fontSize={[0, 0, 0, 1]}
            lineHeight={4}
            opacity={0.4}
            letterSpacing='text'
            mt={0}
          >
            {
              categoryIds.map((categoryId, index) => (
                <React.Fragment key={`${id}-${categoryId}`}>
                  <InternalLink to={getCategoryLink(categoryId)}>
                    { getCategoryNameById(categoryId) }
                  </InternalLink>
                  {
                    (index !== categoryIds.length-1) ? (
                      <React.Fragment>
                        ,&nbsp;
                      </React.Fragment>
                    ) : null
                  }
                </React.Fragment>
              ))
            }
            {
              categoryIds.length ? (
                <React.Fragment>
                  &nbsp;-&nbsp;
                </React.Fragment>
              ) : null
            }
            { formatDate(date, 'dd.mm.yy') }
          </Text.span>
        </Box>
        <InternalLink to={getBlogLink(id)}>
          <Box pt={1}>
            <Heading.h3
              fontSize={[3, 3, 3, 5]}
              fontFamily='SoleilBk'
              letterSpacing='h4'
            >
              { title }
            </Heading.h3>
          </Box>
        </InternalLink>
        <P>
          { description }
        </P>
        <InternalLink to={getAuthorLink(author.id)}>
          <Text.p
            fontFamily='Soleil'
            fontSize={0}
            color='gray.2'
            lineHeight={3}
            mt={[1, 1, 1, 2]}
          >
            written by&nbsp;
            { author.name }
          </Text.p>
        </InternalLink>
      </Box>

      <Row
        justifyContent='center'
        width={0.4}
        mt={[2, 2, 2, 0]}
      >
        {
          thumbnail ? (
            <HyperLinkBackground
              height='auto'
              width={[55, 55, 55, 1]}
              maxHeight={[55, 55, 55, 200]}
              background={`black url(${JSON.stringify(thumbnail)})`}
              backgroundSize='cover'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              to={getBlogLink(id)}
            />
          ) : (
            <HyperLinkImagePlaceholder
              size='small'
              wrapperProps={{
                width: [55, 55, 55, 1],
                height: [55, 55, 55, 200]
              }}
            />
          )
        }

      </Row>
    </Row>
  )
}