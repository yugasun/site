import React from 'react'
import CheckboxFilter from './Checkboxes'
import { frameworkOptions } from './Data'
import { Box, P, Row, InlineBlock } from 'serverless-design-system'

const SearchFilterOptions = ({ refreshFilters }) => (
  <Box>
    <InlineBlock>
      <P m={0}>framework</P>
      <Row>
        <CheckboxFilter
          options={frameworkOptions}
          refreshFilter={refreshFilters}
          name='framework'
        />
      </Row>
    </InlineBlock>
  </Box>
)

export default SearchFilterOptions
