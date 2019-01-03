import React from 'react'
import {
  Absolute,
  Box,
  Background,
  Flex,
  Text,
  Image,
  Row,
  Column,
} from 'serverless-design-system'
import { getLinkComponent } from 'src/components/BlockLink'
import { AppContainer, BlockLink } from 'src/components'
import { withTheme } from 'styled-components'
import {
  getAuthorInfo,
  getBlogLink,
  getAuthorLink
} from 'src/utils/blog'
import Categories from '../Categories'
import ImagePlaceholder from '../ImagePlaceholder'
import { Heading, P } from 'src/fragments/DesignSystem'

const LinkImage = getLinkComponent(Image)

const WrapperWithHero = ({ heroImage, children }) => (
  heroImage ? (
    <Background
      width={1}
      height='fullHeight'
      background={`black url(${JSON.stringify(heroImage)})`}
      backgroundSize='cover'
      backgroundPosition='center'
    >
      { children }
    </Background>
  ) : (
    <ImagePlaceholder size='large'>
      { children }
    </ImagePlaceholder>
  )
)

const Item = ({ id, frontmatter }) => {
  const author = getAuthorInfo({ frontmatter })
  const authorURL = getAuthorLink(author.id)
  const { title, category: categoryIds, description, heroImage } = frontmatter

  return (
    <WrapperWithHero heroImage={heroImage}>
      <Absolute
        height='fullHeight'
        width={1}
        bg='black'
        zIndex={1}
        style={{ opacity: 0.5 }}
      />
      <Absolute
        width={1}
        zIndex={2}
      >
        <AppContainer>
          <Flex.verticallyCenter
            flexDirection='column'
            width={[0.84, 0.84, 1, 0.65]}
            m='auto'
            pt={[2, 2, 5, 5, 9]}
          >
            <Categories
              categoryIds={categoryIds}
              textStyleProps={{ color: 'white', opacity: 0.5 }}
            />
            <BlockLink to={getBlogLink(id)}>
              <Heading.h1
                align='center'
                color='white'
              >
                { title }
              </Heading.h1>
            </BlockLink>
            <Box
              width={[1, 1, 1, 0.9]}
              px={[0, 0, 0, 4]}
            >
              <P
                color='white'
                mt={[0, 0, 1, 15]}
                align='center'
              >
                { description }
              </P>
            </Box>

            <Row width={1}>
              <Column
                width={1}
                alignItems='flex-end'
                justifyContent='center'
              >
                <BlockLink to={authorURL}>
                  <Text
                    fontFamily='Soleil'
                    fontSize={0}
                    color='white'
                    lineHeight={2}
                  >
                    written by &nbsp;
                  </Text>
                </BlockLink>
              </Column>

              <LinkImage
                src={author.avatar}
                height={33}
                width={33}
                to={authorURL}
              />

              <Column
                width={1}
                alignItems='flex-start'
                justifyContent='center'
              >
                <BlockLink to={authorURL}>
                  <Text
                    fontFamily='Soleil'
                    fontSize={0}
                    color='white'
                    lineHeight={2}
                  >
                    &nbsp; {author.name}
                  </Text>
                </BlockLink>
              </Column>
            </Row>
          </Flex.verticallyCenter>
        </AppContainer>
      </Absolute>
    </WrapperWithHero>
  )
}

export default withTheme(Item)
