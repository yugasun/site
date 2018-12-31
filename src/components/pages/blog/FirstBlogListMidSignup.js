import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Heading,
  Card,
} from 'serverless-design-system'
import { NewsLetterForm } from 'src/components'
import styled from 'styled-components'
import { Button } from 'src/fragments/DesignSystem'

const RelativeWithBoxShadow = styled(Relative)`
  box-shadow: 2px 20px 50px 2px rgba(0, 0, 0, 0.15);
`

const SubmitButton = (props) => (
  <Button
    {...props}
  >
    subscribe
  </Button>
)

const Title = ({ component: HeadingComp, color }) => (
  <HeadingComp
    color={color}
    fontFamily='SoleilLt'
    letterSpacing='0'
    lineHeight={2}
  >
    Join 16,000 other developers and keep up to speed on the latest serverless news and releases.
  </HeadingComp>
)

const FirstBlogListSignup = () => (
  <React.Fragment>
    <RelativeWithBoxShadow
      display={['none', 'none', 'block']}
      id='newsletter-box'
    >
      <Background
        background={'white'}
        backgroundSize='cover'
      >
        <ResponsiveStack>
          <Flex
            width={[1, 1, 0.8]}
            p={[1, 1, 5, '73px']}
            pr={2}
          >
            <Title component={Heading.h4} color='black' />
          </Flex>
          <Flex
            justifyContent='flex-end'
            alignItems='center'
            width={[1, 1, 0.7]}
            p={[1, 1, 4, 4, 7]}
          >
            <NewsLetterForm
              emailFieldProps={{ width: 1,
                height: 36,
                bg: "#eaeaea",
                fontSize: 1,
                placeholder: "email address",
                id: "newsletter-emailfield"
              }}
              btnComponent={SubmitButton}
              wrapperProps={{ width: 1, color: 'white' }}
              formStyles={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
          </Flex>
        </ResponsiveStack>
      </Background>
    </RelativeWithBoxShadow>

    <RelativeWithBoxShadow
      m={15}
      display={['block', 'block', 'none']}
      top={['-60px', '-60px', '-60px', '-60px', '-360px']}
      mb={['-100px', '-100px', '-100px', '-100px', '-290px']}
    >
      <Card border='1px solid #fd5750'>
        <Background>
          <ResponsiveStack
            bg='#ffffffe6'
            py={2}
          >
            <Flex
              width={1}
              px={2}
              pb={2}
            >
              <Title component={Heading.h5} />
            </Flex>
            <NewsLetterForm
              wrapper={Flex.column}
              wrapperProps={{ alignItems: 'center', width: 1, px: 2 }}
              emailFieldProps={{
                bg: "#8c8c8c33",
                placeholder: "enter email address",
                placeholderColor: "gray.3",
                color: "gray.3",
                id: "newsletter-emailfield"
              }}
            />
          </ResponsiveStack>
        </Background>
      </Card>
    </RelativeWithBoxShadow>
  </React.Fragment>
)

export default FirstBlogListSignup