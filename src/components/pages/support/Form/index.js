import React from 'react'

import { Box, Flex, InlineBlock, P, Heading } from 'serverless-design-system'
import { TextArea, Button, Label, TextField, Checkbox, RadioButton } from 'src/fragments/DesignSystem/Form'

import formHandler from 'src/utils/formHandler'
import { validateEmail } from 'src/utils/validator'

import styled from 'styled-components'

const StyledForm = styled(Flex.column)`
  position: absolute;
  top: 0;
  background-color: white;
  margin-top: 315px;
  padding: 40px;
  width: 622px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #eaeaea;

  @media screen and (max-width: 414px) {
    position: relative;
    width: auto;
    padding-top: 40px;
    padding-bottom:40px;
    padding-right: 20px;
    padding-left:20px;
    margin-top: 10px;
    margin-bottom: 80px;
  }
`

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: false,
      success: false,

      email: '',
      first_name: '',
      last_name: '',
      poi: '',
      developers_count: '',
      message: '',
      infrastructure: {
        'AWS' : false,
        'Google Cloud Platform' :  false,
        'Microsoft Azure' : false,
        'Other' :  false,
      },
      use_cases: {
        'Backend API': false,
        'Custom DevOps': false,
        'Data processing': false,
        'Other': false,
      }
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const formId = 'support-contact-us'
    const {
      email,
      first_name,
      last_name,
      company,
      poi,
      developers_count,
      message,
    } = this.state

    if (!validateEmail(email)) {
      alert('Please enter valid email address')
      return false
    }

    this.setState({ loading: true })
    const infrastructure_keys = Object.keys(this.state.infrastructure)
    const infrastructure = infrastructure_keys.filter((infra) => this.state.infrastructure[infra])

    const use_cases_keys = Object.keys(this.state.use_cases)
    const use_cases = use_cases_keys.filter((useCase) => this.state.use_cases[useCase])

    const formData = {
      formId: formId,
      fields: { email, first_name, last_name, company, poi, developers_count, message, infrastructure, use_cases }
    }
    
    formHandler(formData).then((res) => {
      this.setState({
        success: true,
        loading: false
      })
    }).catch((e) => {
      console.log('ERROR', e)
      this.setState({
        success: false,
        loading: false,
        error: e
      })
    })
    return false
  }

  updateInfrastructure = (fieldName, value) => {
    this.setState({
      infrastructure: { ...this.state.infrastructure, [ fieldName ] : value }
    })
  }

  updateUseCases = (fieldName, value) => {
    this.setState({
      use_cases: { ...this.state.use_cases, [ fieldName ] : value }
    })
  }

  updateDeveloperCount = (value) => {
    this.setState({
      developers_count: value
    })
  }

  updatePoi = (value) => {
    this.setState({
      poi: value
    })
  }

  render() {
    const { loading, success } = this.state
    let submitButtonText
    if(loading) {
      submitButtonText = 'loading'
    } else if(success) {
      submitButtonText = 'request sent'
    } else {
      submitButtonText = 'submit'
    }

    return (
      <form onSubmit={this.onSubmit}>
        <StyledForm>
          <Box width={[ 1, 1, 5/7 ]}>
          </Box>

           <Heading.h4
            fontFamily='Soleil'
            lineHeight={'32px'}
            letterSpacing={'-0.4px'}
            mb={0}
          >
            Wanna know how Serverless can help <br /> your company? Let’s talk.
          </Heading.h4>
          
          <Box mt={3} width={1}>
            <TextField
              placeholder='E-mail'
              name='email'
              onChange={({ target }) => this.setState({ email: target.value, success: false })}
              required
            />
          </Box>

          <Flex.spaceBetween mt={3}>
            <TextField
              width={48/100}
              placeholder='First Name'
              name='first_name'
              onChange={({ target }) => this.setState({ first_name: target.value, success: false })}
              required
            />
            <TextField
              width={48/100}
              placeholder='Last Name'
              name='last_name'
              onChange={({ target }) => this.setState({ last_name: target.value, success: false })}
              required
            />
          </Flex.spaceBetween>

          <Box mt={3}>
            <TextField
              placeholder='Company Name'
              name='company'
              onChange={({ target }) => this.setState({ company: target.value, success: false })}
              required
            />
          </Box>

           <Box mt={3}>
            <Label>
            How is your company currently using the Serverless Framework?
            </Label>
            <Flex flexDirection={['column', 'column', 'row']}>
            <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='five-to-fifteen'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='poi'
                      id='five-to-fifteen'
                      onChange={() => this.updatePoi('In Production')}
                    />
                    <InlineBlock>in production</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='in-development'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='poi'
                      id='in-development'
                      onChange={() => this.updatePoi('In Development')}
                    />
                    <InlineBlock>in development</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='not-at-all'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='poi'
                      id='not-at-all'
                      onChange={() => this.updatePoi('Not at all')}
                    />
                    <InlineBlock>not at all</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
          </Box>

           <Box mt={3}>
            <Label>
            How many developers in your organization plan on doing serverless development?
            </Label>
            <Flex flexDirection={['column', 'column', 'row']}>
              <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='less-than-five'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='less-than-five'
                      onChange={() => this.updateDeveloperCount('Less than 5')}
                    />
                    <InlineBlock>less than 5</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='five-to-fifteen'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='five-to-fifteen'
                      onChange={() => this.updateDeveloperCount('5 - 15')}
                    />
                    <InlineBlock>5-15</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='fifteen-to-thirty'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='fifteen-to-thirty'
                      onChange={() => this.updateDeveloperCount('15 - 30')}
                    />
                    <InlineBlock>15-30</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
            <Flex flexDirection={['column', 'column', 'row']}>
              <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='thirty-to-hundred'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='thirty-to-hundred'
                      onChange={() => this.updateDeveloperCount('30 - 100')}
                    />
                    <InlineBlock>30-100</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/3]}>
                <Label htmlFor='more-than-hundred'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='more-than-hundred'
                      onChange={() => this.updateDeveloperCount('More than 100')}
                    />
                    <InlineBlock>more than 100</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
          </Box>

          <Box mt={3}>
            <Label>
              Which infrastructure providers are you utilizing with the Serverless Framework?
            </Label>
            <Flex flexDirection={['column', 'column', 'row']}>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='aws'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='infrastructure'
                      id='aws'
                      onChange={({ target }) => this.updateInfrastructure('AWS', target.checked)}
                    />
                    <InlineBlock>AWS</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='google-cloud-platform'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='infrastructure'
                      id='google-cloud-platform'
                      onChange={({ target }) => this.updateInfrastructure('Google Cloud Platform', target.checked)}
                    />
                    <InlineBlock>Google Cloud Platform</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
            <Flex flexDirection={['column', 'column', 'row']}>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='azure'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='infrastructure'
                      id='azure'
                      onChange={({ target }) => this.updateInfrastructure('Microsoft Azure', target.checked)}
                    />
                    <InlineBlock>Microsoft Azure</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='other'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='infrastructure'
                      id='other'
                      onChange={({ target }) => this.updateInfrastructure('Other', target.checked)}
                    />
                    <InlineBlock>Other</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
          </Box>

          <Box mt={3}>
            <Label>
              What use cases do you plan to use Serverless Framework for?
            </Label>
            <Flex flexDirection={['column', 'column', 'row']}>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='backend-api'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='use-cases'
                      id='backend-api'
                      onChange={({ target }) => this.updateUseCases('Backend API', target.checked)}
                    />
                    <InlineBlock>Backend API</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='custom-devops'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='use-cases'
                      id='custom-devops'
                      onChange={({ target }) => this.updateUseCases('Custom DevOps', target.checked)}
                    />
                    <InlineBlock>Custom DevOps</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
            <Flex flexDirection={['column', 'column', 'row']}>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='data-processing'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='use-cases'
                      id='data-processing'
                      onChange={({ target }) => this.updateUseCases('Data processing', target.checked)}
                    />
                    <InlineBlock>Data processing</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={[1, 1, 1/2]}>
                <Label htmlFor='other'>
                  <Flex.verticallyCenter>
                    <Checkbox
                      name='use-cases'
                      id='other'
                      onChange={({ target }) => this.updateUseCases('Other', target.checked)}
                    />
                    <InlineBlock>Other</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
          </Box>

          <Box mt={3}>
            <TextArea
              placeholder='Please describe your Serverless use-case and any goals your team has with Serverless.'
              name='message'
              onChange={({ target }) => this.setState({ message: target.value, success: false })}
            />
          </Box>

          <Box mt={3}>
            <Button disabled={loading}>
              { submitButtonText }
            </Button>
          </Box>
        </StyledForm>
      </form>
    )
  }
}
