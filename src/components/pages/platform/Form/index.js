import React from 'react'

import { Box, Flex, InlineBlock, P } from 'serverless-design-system'
import Button from '../../home/Button'

import formHandler from 'src/utils/formHandler'
import { validateEmail } from 'src/utils/validator'
import Label from './Label'
import TextField from './TextField'
import SelectField from './SelectField'
import Checkbox from './Checkbox'
import TextArea from './TextArea'
import RadioButton from './RadioButton'
import track from 'src/utils/analytics/track'

import styled from 'styled-components'

const StyledForm = styled(Flex.column)`
  position: absolute;
  top: 0;
  background-color: white;
  margin-top: 300px;
  padding: 40px;
  width: 622px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #eaeaea;

  @media screen and (max-width: 414px) {
    position: relative;
    width: auto;
    padding: 10px;
    margin-top: 10px;
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
        'AWS' : true,
        'Google Cloud Platform' :  false,
        'Microsoft Azure' : false,
        'Other' :  false,
      }
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const formId = 'platform-contact-us'
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
    const infras = Object.keys(this.state.infrastructure)
    const infrastructure = infras.filter((infra) => this.state.infrastructure[infra])

    const formData = {
      formId: formId,
      fields: { email, first_name, last_name, company, poi, developers_count, message, infrastructure }
    }

    /*
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
    */
    console.log(formData)
    return false
  }

  updateInfrastructure = (fieldName, value) => {
    this.setState({
      infrastructure: { ...this.state.infrastructure, [ fieldName ] : value }
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

    if (success) {
      //track('site:enterprise_contact', { category: 'Contact Form' })
      return (
        <Box>
          <P>
            Thanks we will be in touch shortly.
          </P>
        </Box>
      )
    }

    return (
      <form onSubmit={this.onSubmit}>
        <StyledForm>
          <Box width={[ 1, 1, 5/7 ]}>
          </Box>

          <Box my={3} width={1}>
            <TextField
              placeholder='Email'
              name='email'
              onChange={({ target }) => this.setState({ email: target.value })}
              required
            />
          </Box>

          <Flex.spaceBetween my={2}>
            <TextField
              width={48/100}
              placeholder='First Name'
              name='first_name'
              onChange={({ target }) => this.setState({ first_name: target.value })}
              required
            />
            <TextField
              width={48/100}
              placeholder='Last Name'
              name='last_name'
              onChange={({ target }) => this.setState({ last_name: target.value })}
              required
            />
          </Flex.spaceBetween>

          <Box my={2}>
            <TextField
              placeholder='Company Name'
              name='company'
              onChange={({ target }) => this.setState({ company: target.value })}
              required
            />
          </Box>

           <Box my={2}>
            <Label>
            How is your company currently using the Serverless Framework?
            </Label>
            <Flex>
              <Box mt={2} width={1/3}>
                <Label htmlFor='in-development'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='poi'
                      id='in-development'
                      onChange={() => this.updatePoi('In Development')}
                    />
                    <InlineBlock>In Development</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={1/3}>
                <Label htmlFor='five-to-fifteen'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='poi'
                      id='five-to-fifteen'
                      onChange={() => this.updatePoi('In Production')}
                    />
                    <InlineBlock>In Production</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={1/3}>
                <Label htmlFor='fifteen-to-thirty'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='poi'
                      id='fifteen-to-thirty'
                      onChange={() => this.updatePoi('Not at all')}
                    />
                    <InlineBlock>Not at all</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
          </Box>

           <Box my={2}>
            <Label>
            How many developers in your organization plan on doing serverless development?
            </Label>
            <Flex>
              <Box mt={2} width={1/3}>
                <Label htmlFor='less-than-five'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='less-than-five'
                      onChange={() => this.updateDeveloperCount('Less than 5')}
                    />
                    <InlineBlock>Less than 5</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={1/3}>
                <Label htmlFor='five-to-fifteen'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='five-to-fifteen'
                      onChange={() => this.updateDeveloperCount('5 - 15')}
                    />
                    <InlineBlock>5 - 15</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={1/3}>
                <Label htmlFor='fifteen-to-thirty'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='fifteen-to-thirty'
                      onChange={() => this.updateDeveloperCount('15 - 30')}
                    />
                    <InlineBlock>15 - 30</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
            </Flex>
            <Flex>
              <Box mt={2} width={1/3}>
                <Label htmlFor='thirty-to-hundred'>
                  <Flex.verticallyCenter>
                    <RadioButton
                      name='developer-count'
                      id='thirty-to-hundred'
                      onChange={() => this.updateDeveloperCount('30 - 100')}
                    />
                    <InlineBlock>30 - 100</InlineBlock>
                  </Flex.verticallyCenter>
                </Label>
              </Box>
              <Box mt={2} width={1/3}>
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

          <Box my={2}>
            <Label>
              Which infrastructure providers you are utilizing with the Serverless Framework?
            </Label>
            <Flex>
              <Box mt={2} width={1/2}>
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
              <Box mt={2} width={1/2}>
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
            <Flex>
              <Box mt={2} width={1/2}>
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
              <Box mt={2} width={1/2}>
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

          <Box my={2}>
            <TextArea
              placeholder='Please describe your Serverless use-case and any goals your team has with Serverless.'
              name='message'
              onChange={({ target }) => this.setState({ message: target.value })}
            />
          </Box>

          <Box my={4}>
            <Button width='280px' disabled={loading}>
              { loading ? 'Loading' : 'submit' }
            </Button>
          </Box>
        </StyledForm>
      </form>
    )
  }
}
