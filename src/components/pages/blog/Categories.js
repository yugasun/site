import React from 'react'
import { Row, Text } from 'serverless-design-system'
import { InternalLink } from 'src/fragments'
import {
  getCategoryLink,
  getCategoryNameById,
} from 'src/utils/blog'

const CategoryDetail = ({ id, renderComma, textStyleProps }) => (
  <React.Fragment>
    <Text.span
      fontFamily='Soleil'
      fontSize={1}
      opacity={0.4}
      { ...textStyleProps }
    >
      <InternalLink to={getCategoryLink(id)} className='blog-category'>
        { getCategoryNameById(id) }
      </InternalLink>
      { renderComma ? (<React.Fragment>,&nbsp;</React.Fragment>) : '' }
    </Text.span>
  </React.Fragment>
)

export default ({ categoryIds, textStyleProps = {} }) => (
  <Row my={25}>
    {
      categoryIds.map((id, index) => (
        <CategoryDetail
          key={id}
          id={id}
          textStyleProps={textStyleProps}
          renderComma={index !== categoryIds.length-1}
        />
      ))
    }
  </Row>
)
