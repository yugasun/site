import React from 'react'
import Link from 'gatsby-link'
import { Box, Flex, Text, Row, Image } from 'serverless-design-system'
import BlogNavbarContext from '../BlogNavbarContext'
import CategoriesData from 'src/constants/categories.json'
import { getCategoryNameById } from 'src/utils/blog'
import closeIcon from 'src/assets/images/icon-close.png'
import mobileMenuIcon from 'src/assets/images/icon-mobile-menu.png'
import HeaderCTAButton from 'src/components/Header/HeaderCTAButton'
import NewsletterOption from './NewsletterOptin'

const Category = ({ children, link }) => (
  <Box py={'13.5px'}>
    <Link to={link}>
      <Text.span
        color='white'
        lineHeight='16px'
        letterSpacing='text'
        align='center'
        fontSize='14px'
      >
        {children}
      </Text.span>
    </Link>
  </Box>
)

const MobileCategories = () => (
  <BlogNavbarContext.Consumer>
    {({ isNavbarActive, toggleNavbarActiveness }) =>
      isNavbarActive && (
        <React.Fragment>
          <Row justifyContent='space-between' onClick={toggleNavbarActiveness}>
            <Box>
              <Link to='/'>
                <Text.p
                  mt={0}
                  color='white'
                  opacity={0.5}
                  align='left'
                  fontSize='12px'
                >
                  &lt; serverless.com
                </Text.p>
              </Link>
            </Box>
            <Image
              maxHeight='16px'
              src={isNavbarActive ? closeIcon : mobileMenuIcon}
              objectFit='contain'
            />
          </Row>
          <Flex.center flexDirection='column' pt={2} pb={3}>
            <Box mb={'54px'}>
              <HeaderCTAButton />
            </Box>

            <Category link={`/blog/`}>all</Category>
            {Object.keys(CategoriesData).map(key => (
              <Category link={`/blog/category/${key}/`} key={key}>
                {getCategoryNameById(key)}
              </Category>
            ))}
            <NewsletterOption />
          </Flex.center>
        </React.Fragment>
      )
    }
  </BlogNavbarContext.Consumer>
)

export default MobileCategories
