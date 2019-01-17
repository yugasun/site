import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Heading,
} from 'serverless-design-system'
import { NewsLetterForm } from 'src/components'
import { Button } from 'src/fragments/DesignSystem'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  &:hover {
    color: #fd5750;
    background-color: white;
  }
`

const SubmitButton = props => (
  <StyledButton
    width={[1, 1, 1, 1, 0.4]}
    height={36}
    fontSize={1}
    color={['white', 'white', 'white', 'white', '#fd5750']}
    bg={['#fd5750', '#fd5750', '#fd5750', '#fd5750', 'white']}
    {...props}
  >
    subscribe
  </StyledButton>
)

const Title = ({ component: HeadingComp, color }) => (
  <HeadingComp
    color={color}
    fontFamily='SoleilLt'
    letterSpacing='0'
    lineHeight={2}
  >
    Join 16,000 other developers and keep up to speed on the latest serverless
    news and releases.
  </HeadingComp>
)

const BlogPrefooter = () => (
  <React.Fragment>
    <Relative
      display={['none', 'none', 'none', 'none', 'block']}
      top='-370px'
      mb='-290px'
      id='newsletter-box'
      pt='100px'
    >
      <Background background={'#fd5750'} backgroundSize='cover'>
        <ResponsiveStack>
          <Flex width={[1, 1, 0.8]} p={[1, 1, 5, 7]} pr={2}>
            <Title component={Heading.h4} color='white' />
          </Flex>
          <Flex
            justifyContent='flex-end'
            alignItems='center'
            width={[1, 1, 0.7]}
            p={[1, 1, 4, 4, 7]}
          >
            <NewsLetterForm
              emailFieldProps={{
                width: 1,
                height: 36,
                bg: '#ffffff33',
                fontSize: 1,
                placeholder: 'email address',
                id: 'newsletter-emailfield',
              }}
              btnComponent={SubmitButton}
              wrapperProps={{ width: 1, color: 'white' }}
              formStyles={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Flex>
        </ResponsiveStack>
      </Background>
    </Relative>
  </React.Fragment>
)

export default BlogPrefooter
