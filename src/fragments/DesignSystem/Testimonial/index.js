import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Flex,
  Text,
  Image as Img,
  ResponsiveStack,
  Background,
  Card
} from 'serverless-design-system'

const DesktopText = styled.blockquote`
  font-family: 'SoleilBk';
  font-size: 24px;
  font-style: italic;
  line-height: 32px;
  margin: 0;
  letter-spacing: 0;

  
  @media screen and (min-width: 415px) {
        width: 800px;
  }
`

const comp = ({
  img, children, name, designation, alt,
}) => {
  const testimonial = children
  return (
    <Background background='white'>
      <Card
        pt={['32px', '32px', '76px']}
        pb={[2, 3, '72px']}
        px={['22px', '22px', '104px']}
        height={['495px', '495px', '322px']}
      >
        <Flex
          flexWrap='wrap'
          flexDirection={['column', 'row']}
          justifyContent={['', 'space-between']}
        >
          <DesktopText
          >
            {testimonial}
          </DesktopText>

          <ResponsiveStack width={1}>
            <Flex
              width={[1, 1, 4 / 10]}
              order={[ '0', '0', '1' ]}
              alignItems='flex-end'
              justifyContent={['flex-start', 'flex-start', 'flex-end']}
              mt={['62px', '62px', 0]}
            >
              <Img
                mt={3}
                width={['81px', '81px', '128px']}
                height={['27px', '27px', '42px']}
                src={img}
                alt={alt}
              />
            </Flex>

            <Flex
              flexDirection='column'
              mt={['22px','22px', 3]}
              width={[1, 1, 6 / 10]}
              order={[ '1', '1', '0' ]}
            >
              <Text
                fontFamily='SoleilBk'
                fontSize={3}
                letterSpacing='-0.3px'
                lineHeight='24px'
              >
                {name}
              </Text>
              <Text
                fontFamily={['Soleil', 'Soleil', 'SoleilBk']}
                fontSize={['12px','12px', '16px']}
                lineHeight={['16px', '16px', '26px']}
                color='gray.2'
              >
                {designation}
              </Text>
            </Flex>
          </ResponsiveStack>
        </Flex>
      </Card>
    </Background>
  )
}

comp.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const Testimonial = styled(comp)``

export default Testimonial