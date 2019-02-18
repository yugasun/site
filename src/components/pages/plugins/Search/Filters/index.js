import React from 'react'
import CheckboxFilter from './Checkboxes'
import { statusOptions } from './Data'
import { Box, P, Row, InlineBlock } from 'serverless-design-system'

const SearchFilterOptions = ({ refreshFilters }) => (
  <Box>
    <InlineBlock>
      <P m={0}>status</P>
      <Row>
        <CheckboxFilter
          options={statusOptions}
          refreshFilter={refreshFilters}
          name='platform'
        />
      </Row>
    </InlineBlock>
  </Box>
)

export default SearchFilterOptions
