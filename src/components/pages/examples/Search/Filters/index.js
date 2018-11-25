import React from 'react'
import CheckboxFilter from './Checkboxes'
import { platformOptions, languageOptions, frameworkOptions } from './Data'
import { Box, P, Row, InlineBlock } from 'serverless-design-system'

const SearchFilterOptions = ({refreshFilters}) => (
    <Box>
        <InlineBlock>
            <P>platform</P>
            <Row>
                <CheckboxFilter options={platformOptions} refreshFilter={refreshFilters} name='platform'/>
            </Row>
        </InlineBlock>

        <InlineBlock>
            <P>language</P>
                <Row>
                    <CheckboxFilter options={languageOptions} refreshFilter={refreshFilters} name='language'/>
                </Row>
        </InlineBlock>

        <InlineBlock>
        <P>framework</P>
            <Row>
                 <CheckboxFilter options={frameworkOptions} refreshFilter={refreshFilters} name='framework'/>
            </Row>
        </InlineBlock>   
    </Box>                      
)

export default SearchFilterOptions