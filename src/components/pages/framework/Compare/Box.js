import React, { Fragment } from 'react'
import { Box, Heading, HorizontalRule, Row, P } from 'serverless-design-system'
import styled from 'styled-components'

const Point = styled(P)`
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0;
    color: white;
`

const HorizontalStyle = styled(HorizontalRule)`
    border-top-style: solid;
`

const ComparisonBox = ({points, heading}) => (
            <Box color='white' px={'32px'} pt={'92px'} pb={'16px'}>
                <Heading.h3>
                    serverless framework
                </Heading.h3>
                <Heading.h2>
                    {heading}
                </Heading.h2>
                
                {
                points.map((point) => (
                    <Fragment key={point}>
                    <HorizontalStyle color='white' height='1px' width='100%'/>
                    <Row>
                        <Box width='50%'>
                            <Point>{point[0]}</Point>
                        </Box>
                        
                        <Point>{point[1]}</Point>
                    </Row>
                    </Fragment>
                ))
                }
            </Box>
)

export default ComparisonBox