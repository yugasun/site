import React from 'react'

import { Box, Flex, InlineBlock, Heading } from 'serverless-design-system'
import {
  TextArea,
  Label,
  TextField,
  Checkbox,
  RadioButton,
} from 'src/fragments/DesignSystem/Form'
import { Button } from 'src/fragments/DesignSystem'

import formHandler from 'src/utils/formHandler'
import { validateEmail } from 'src/utils/validator'

import styled from 'styled-components'
const formId = 'enterprise-contact-us'

const StyledForm = styled(Flex)`
  position: absolute;
  top: 0;
  background-color: white;
  margin-top: 4040px;
  padding: 32px;
  width: 608px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #eaeaea;
  width: 73%;

  @media screen and (max-width: 1600px) and (min-width: 1024px) {
    margin-top: 4030px;
    width: 76%;
  }

  @media screen and (max-width: 900px) {
    position: absolute;
    width: 92%;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 3950px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 1024px) and (min-width: 900px) {
    position: absolute;
    margin-top: 3850px;
    width: 92%;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    margin-top: 5100px;
    width: 78%;
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
        AWS: false,
        'Google Cloud Platform': false,
        'Microsoft Azure': false,
        Other: false,
      },
    }
  }

  onSubmit = event => {
    event.preventDefault()
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
    const infrastructure = infras.filter(
      infra => this.state.infrastructure[infra]
    )

    const formData = {
      formId: formId,
      fields: {
        email,
        first_name,
        last_name,
        company,
        poi,
        developers_count,
        message,
        infrastructure,
      },
    }

    formHandler(formData)
      .then(res => {
        this.setState({
          success: true,
          loading: false,
        })
      })
      .catch(e => {
        console.log('ERROR', e)
        this.setState({
          success: false,
          loading: false,
          error: e,
        })
      })
    return false
  }

  updateInfrastructure = (fieldName, value) => {
    this.setState({
      infrastructure: { ...this.state.infrastructure, [fieldName]: value },
    })
  }

  updateDeveloperCount = value => {
    this.setState({
      developers_count: value,
    })
  }

  updatePoi = value => {
    this.setState({
      poi: value,
    })
  }

  render() {
    const { loading, success } = this.state
    let submitButtonText
    if (loading) {
      submitButtonText = 'loading'
    } else if (success) {
      submitButtonText = 'request sent'
    } else {
      submitButtonText = 'submit'
    }

    return (
      <form onSubmit={this.onSubmit} id={formId}>
        <StyledForm
          flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
          <Box>
            <Heading.h4
              fontFamily='Soleil'
              lineHeight={'32px'}
              letterSpacing={'-0.4px'}
              mb={0}
            >
              Talk with us
            </Heading.h4>

            <Box mt={2} width={1}>
              <TextField
                placeholder='E-mail'
                name='email'
                onChange={({ target }) =>
                  this.setState({ email: target.value, success: false })
                }
                required
              />
            </Box>

            <Flex.spaceBetween mt={1}>
              <TextField
                width={49 / 100}
                placeholder='First Name'
                name='first_name'
                onChange={({ target }) =>
                  this.setState({ first_name: target.value, success: false })
                }
                required
              />
              <TextField
                width={49 / 100}
                placeholder='Last Name'
                name='last_name'
                onChange={({ target }) =>
                  this.setState({ last_name: target.value, success: false })
                }
                required
              />
            </Flex.spaceBetween>

            <Box mt={1}>
              <TextField
                placeholder='Company Name'
                name='company'
                onChange={({ target }) =>
                  this.setState({ company: target.value, success: false })
                }
                required
              />
            </Box>

            <Box mt={3}>
              <Label>
                How is your company currently using the Serverless Framework?
              </Label>
              <Flex flexDirection={['column', 'column', 'row']}>
                <Box mt={2} width={[1, 1, 1 / 3]}>
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
                <Box mt={2} width={[1, 1, 1 / 3]}>
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
                <Box mt={2} width={[1, 1, 1 / 3]}>
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
                How many developers in your organization plan on doing
                serverless development?
              </Label>
              <Flex flexDirection={['column', 'column', 'row']}>
                <Box mt={2} width={[1, 1, 1 / 3]}>
                  <Label htmlFor='less-than-five'>
                    <Flex.verticallyCenter>
                      <RadioButton
                        name='developer-count'
                        id='less-than-five'
                        onChange={() =>
                          this.updateDeveloperCount('Less than 5')
                        }
                      />
                      <InlineBlock>less than 5</InlineBlock>
                    </Flex.verticallyCenter>
                  </Label>
                </Box>
                <Box mt={2} width={[1, 1, 1 / 3]}>
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
                <Box mt={2} width={[1, 1, 1 / 3]}>
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
                <Box mt={2} width={[1, 1, 1 / 3]}>
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
                <Box mt={2} width={[1, 1, 1 / 3]}>
                  <Label htmlFor='more-than-hundred'>
                    <Flex.verticallyCenter>
                      <RadioButton
                        name='developer-count'
                        id='more-than-hundred'
                        onChange={() =>
                          this.updateDeveloperCount('More than 100')
                        }
                      />
                      <InlineBlock>more than 100</InlineBlock>
                    </Flex.verticallyCenter>
                  </Label>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box pl={[0, 0, 0, 0, 32]}>
            <Box mt={[3, 3, 3, 3, '45px']}>
              <Label>
                Which infrastructure providers are you utilizing with the
                Serverless Framework?
              </Label>
              <Flex flexDirection={['column', 'column', 'row']}>
                <Box mt={2} width={[1, 1, 1 / 2]}>
                  <Label htmlFor='aws'>
                    <Flex.verticallyCenter>
                      <Checkbox
                        name='infrastructure'
                        id='aws'
                        onChange={({ target }) =>
                          this.updateInfrastructure('AWS', target.checked)
                        }
                      />
                      <InlineBlock>AWS</InlineBlock>
                    </Flex.verticallyCenter>
                  </Label>
                </Box>
                <Box mt={2} width={[1, 1, 1 / 2]}>
                  <Label htmlFor='google-cloud-platform'>
                    <Flex.verticallyCenter>
                      <Checkbox
                        name='infrastructure'
                        id='google-cloud-platform'
                        onChange={({ target }) =>
                          this.updateInfrastructure(
                            'Google Cloud Platform',
                            target.checked
                          )
                        }
                      />
                      <InlineBlock>Google Cloud Platform</InlineBlock>
                    </Flex.verticallyCenter>
                  </Label>
                </Box>
              </Flex>
              <Flex flexDirection={['column', 'column', 'row']}>
                <Box mt={2} width={[1, 1, 1 / 2]}>
                  <Label htmlFor='azure'>
                    <Flex.verticallyCenter>
                      <Checkbox
                        name='infrastructure'
                        id='azure'
                        onChange={({ target }) =>
                          this.updateInfrastructure(
                            'Microsoft Azure',
                            target.checked
                          )
                        }
                      />
                      <InlineBlock>Microsoft Azure</InlineBlock>
                    </Flex.verticallyCenter>
                  </Label>
                </Box>
                <Box mt={2} width={[1, 1, 1 / 2]}>
                  <Label htmlFor='other'>
                    <Flex.verticallyCenter>
                      <Checkbox
                        name='infrastructure'
                        id='other'
                        onChange={({ target }) =>
                          this.updateInfrastructure('Other', target.checked)
                        }
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
                onChange={({ target }) =>
                  this.setState({ message: target.value, success: false })
                }
                height={'274px'}
              />
            </Box>

            <Box mt={3}>
              <Button
                disabled={loading || success}
                style={{
                  cursor: loading || success ? 'not-allowed' : 'pointer',
                }}
              >
                {submitButtonText}
              </Button>
            </Box>
          </Box>
        </StyledForm>
      </form>
    )
  }
}
