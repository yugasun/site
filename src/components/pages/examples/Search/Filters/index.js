import React from 'react'
import CheckboxFilter from './Checkboxes'
import { platformOptions, languageOptions } from './Data'
import { Box, P, Row, InlineBlock } from 'serverless-design-system'

const SearchFilterOptions = ({refreshFilters}) => (
    <Box>
        <InlineBlock>
            <P m={0}>platform</P>
            <Row>
                <CheckboxFilter options={platformOptions} refreshFilter={refreshFilters} name='platform'/>
            </Row>
        </InlineBlock>

        <InlineBlock>
            <P m={0}>language</P>
                <Row>
                    <CheckboxFilter options={languageOptions} refreshFilter={refreshFilters} name='language'/>
                </Row>
        </InlineBlock>  
    </Box>                      
)

export default SearchFilterOptions