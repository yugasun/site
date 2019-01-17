import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Heading,
  Card,
  P,
} from 'serverless-design-system'
import { NewsLetterFormNew as NewsLetterForm } from 'src/components'
import styled from 'styled-components'
import { Button } from 'src/fragments/DesignSystem'

const RelativeWithBoxShadow = styled(Relative)`
  box-shadow: 2px 20px 50px 2px rgba(0, 0, 0, 0.15);
`

const SubmitButton = (props) => (
  <Button
    width={['100%', '100%', '100%', '100%', '123px']}
    {...props}
  >
    subscribe
  </Button>
)

const Title = ({ color }) => (
  <P
    color={color}
    fontFamily='SoleilLt'
    letterSpacing={['-0.28px', '-0.28px', '-0.28px', '-0.28px', '0']}
    lineHeight={['24px', '24px', '24px', '24px', '32px']}
    align={['center', 'center', 'center', 'center', 'left']}
    fontSize={['18px', '18px', '18px', '18px', '24px']}
  >
    Join 16,000 other developers and keep up to speed on the latest serverless news and releases.
  </P>
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
            width={[1, 1, 1]}
            pl={[1, 1, 5, 8]}
            py={[1, 1, 5, '63px']}
          >
            <Title component={Heading.h4} color='black' />
          </Flex>
          <Flex
            justifyContent='flex-end'
            alignItems='center'
            width={[1, 1, 1]}
            p={[1, 1, 4, 4, 8]}
          >
            <NewsLetterForm
              emailFieldProps={{ width: 1,
                height: 36,
                bg: "#eaeaea",
                fontSize: '14px',
                placeholder: "email address",
                placeholderColor: "#8c8c8c",
                id: "newsletter-emailfield",
                color: "gray.3",
              }}
              btnComponent={SubmitButton}
              wrapperProps={{ width: 1 }}
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
      <Card>
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
              <Title color='black' />
            </Flex>
            <NewsLetterForm
              wrapper={Flex.column}
              wrapperProps={{ alignItems: 'center', width: 1, px: 2 }}
              emailFieldProps={{
                fontSize: '14px',
                height: 36,
                bg: "#8c8c8c33",
                placeholder: "email address",
                placeholderColor: "#8c8c8c",
                color: "gray.3",
                id: "newsletter-emailfield"
              }}
              btnComponent={SubmitButton}
            />
          </ResponsiveStack>
        </Background>
      </Card>
    </RelativeWithBoxShadow>
  </React.Fragment>
)

export default FirstBlogListSignup