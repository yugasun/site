import React from 'react'
import CheckboxFilter from './Checkboxes'
import { categoryOptions, providerOptions } from './Data'
import { Box, Row, InlineBlock } from 'serverless-design-system'
import { P } from 'src/fragments/DesignSystem'

const SearchFilterOptions = ({ refreshFilters }) => (
  <Box>
    <InlineBlock>
      <P m={0}>category</P>
      <Row>
        <CheckboxFilter
          options={categoryOptions}
          refreshFilter={refreshFilters}
          name='category'
        />
      </Row>
    </InlineBlock>

    <InlineBlock>
      <P m={0}>provider</P>
      <Row>
        <CheckboxFilter
          options={providerOptions}
          refreshFilter={refreshFilters}
          name='provider'
        />
      </Row>
    </InlineBlock>
  </Box>
)

export default SearchFilterOptions
