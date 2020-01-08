import React from 'react'
import { Background, Box, Row, Heading, P } from 'serverless-design-system'
import { InternalLink } from 'src/fragments'
import { getLinkComponent } from 'src/components/BlockLink'
import ImagePlaceholder from 'src/components/pages/blog/ImagePlaceholder'

//TODO: Heading and P tag don't conform to usual sizing pattern - revisit

const HyperLinkBackground = getLinkComponent(Background)
const HyperLinkImagePlaceholder = getLinkComponent(ImagePlaceholder)

const SingleCaseStudyPreview = ({ title, description, thumbnail, url }) => {
  return (
    <Row mb={[3, 3, 4, 6]} pt={2}>
      <Box width={[1, 1, 1, 1, 0.6]} pr={['10px', '10px', '10px', '10%']}>
        <InternalLink to={url}>
          <Box pt={1}>
            <Heading.h3
              fontFamily='Soleil'
              lineHeight={['24px', '24px', '24px', '24px', '44px']}
              letterSpacing={[
                '-0.28px',
                '-0.28px',
                '-0.28px',
                '-0.28px',
                '-0.5px',
              ]}
              fontSize={['18px', '18px', '18px', '18px', '32px']}
            >
              {title}
            </Heading.h3>
          </Box>
        </InternalLink>
        <P
          lineHeight={['16px', '16px', '16px', '16px', '26px']}
          fontSize={['12px', '12px', '12px', '12px', '16px']}
          fontFamily={['Soleil', 'Soleil', 'Soleil', 'Soleil', 'SoleilBk']}
          letterSpacing={0}
        >
          {description}
        </P>
      </Box>

      <Row
        justifyContent='left'
        width={[0.25, 0.25, 0.2, 0.2, 0.4]}
        mt={[2, 2, 2, 0]}
      >
        {thumbnail ? (
          <HyperLinkBackground
            height='auto'
            width={[55, 55, 55, 1]}
            maxHeight={[55, 55, 55, 200]}
            background={`black url(${JSON.stringify(thumbnail)})`}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            to={url}
          />
        ) : (
          <HyperLinkImagePlaceholder
            size='small'
            wrapperProps={{
              width: [55, 55, 55, 1],
              height: [55, 55, 55, 200],
            }}
          />
        )}
      </Row>
    </Row>
  )
}

export default SingleCaseStudyPreview
