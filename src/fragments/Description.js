import React from 'react'
import { Box, Column, Background } from 'serverless-design-system'
import { AppContainer } from 'src/components'
import { P, Heading } from 'src/fragments/DesignSystem'

const Description = ({
  title,
  descriptions,
  imgSrc,
  imageAlignment,
  customStyle,
}) => (
  <Box width={1}>
    <Background
      background={`url(${imgSrc})`}
      backgroundRepeat='no-repeat'
      backgroundPosition={[
        `${imageAlignment} top`,
        `${imageAlignment} top`,
        imageAlignment,
      ]}
      backgroundSize={['120%', '120%', '70%', '70%', '63%']}
    >
      <AppContainer>
        <Column
          mt={2}
          alignItems={imageAlignment === 'right' ? 'flex-start' : 'flex-end'}
          {...customStyle}
        >
          <Box
            width={[1, 1, 0.45]}
            pb={[1, 1, 2, 8, '7vw']}
            pt={['95%', '95%', 2, 8, '7vw']}
          >
            <Box mb={[2, 2, 4, 5]}>
              <Heading.h2>{title}</Heading.h2>
            </Box>
            {descriptions.map((description, index) => (
              <P key={`description-${index}`}>{description}</P>
            ))}
          </Box>
        </Column>
      </AppContainer>
    </Background>
  </Box>
)

Description.defaultProps = { imageAlignment: 'right' }

export default Description
