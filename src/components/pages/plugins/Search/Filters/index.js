import React from 'react'
import CheckboxFilter from './Checkboxes'
import { statusOptions } from './Data'
import { Box, P, Row, InlineBlock } from 'serverless-design-system'

const SearchFilterOptions = ({ refreshFilters }) => (
  <Box mt={[0, 0, 0, 0, -30]}>
    <InlineBlock>
      <P m={0}>status</P>
      <Row>
        <CheckboxFilter
          options={statusOptions}
          refreshFilter={refreshFilters}
          name='status'
        />
      </Row>
    </InlineBlock>
  </Box>
)

export default SearchFilterOptions
