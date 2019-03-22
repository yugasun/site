import React from 'react'
import {
  Background,
  Box,
  Flex,
  Overflow,
  Image,
} from 'serverless-design-system'
import styled from 'styled-components'
import { P, Button } from 'src/fragments/DesignSystem'
import { NewsLetterFormNew as NewsLetterForm } from 'src/components'
import newsletterLogo from 'src/assets/images/pages/subscribe/newsletter-logo.svg'

const FlexWithShadow = styled(Flex.horizontallyCenter)`
  box-shadow: 0 20px 5px 0 rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 512px) and (max-width: 768px) {
    box-shadow: 0 20px 5px 18px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 415px) {
    box-shadow: none;
  }
`
const SubmitButton = props => (
  <Button width={['100%', '100%', '165px']}>subscribe</Button>
)

const LeftColumn = () => (
  <Background background='white' width={[1, 1, 0.8, 0.8, 1]}>
    <FlexWithShadow
      width={1}
      boxSizing='border-box'
      flexDirection='column'
      height='100%'
    >
      <Overflow o='hidden' width={1} px={[0, 0, 6]} pb={[0, 0, 92]}>
        <Box mb={[42, 42, 62, 62, 92]} mt={[62, 62, 92]}>
          <Image src={newsletterLogo} height={31} width={300} />
        </Box>
        <Box width={[0.9, 0.9, 0.85]}>
          <P mt={0} pb={[0, 0, 2]}>
            Join 16,000 other developers and keep up to date with the latest
            serverless news and happenings. The official Serverless newsletter.
          </P>
          <NewsLetterForm
            emailFieldProps={{
              width: 1,
              height: 36,
              bg: '#eaeaea',
              fontSize: '14px',
              placeholder: 'email address',
              placeholderColor: '#8c8c8c',
              id: 'newsletter-emailfield',
              color: 'gray.3',
            }}
            btnComponent={SubmitButton}
            wrapperProps={{ width: 1 }}
            formStyles={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Box>
      </Overflow>
    </FlexWithShadow>
  </Background>
)

export default LeftColumn
